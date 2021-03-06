import React from 'react';
import './LogDetails.css';
import {connect} from 'react-redux';
import styled from 'styled-components'
import {getSelectedLog, getSettings} from '../../redux/selectors';
import {LogDetail} from '../../components/log-detail/LogDetail';

const mapStateToProps = state => {
  return {
    selectedLog: getSelectedLog(state),
    settings: getSettings(state)
  }
};

const DetailsList = styled.div`
  //display: grid;
`;

const DesktopColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;
  max-width: 100%;
  
  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr ;
  }
  
  @media (min-width: 2500px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

class LogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLog: null
    }
  }

  getNumberOfColumns(width) {
    if (width < 1020) {
      return [0]
    } else if (width < 1400) {
      return [0,1]
    } else if (width < 2500) {
      return [0,1,2]
    } else {
      return [0,1,2,3,4,5]
    }
  }

  render() {
    let columns = this.getNumberOfColumns(window.innerWidth);
    return (
      <DesktopColumns>
        {columns.map(column => {
          return (
            <DetailsList key={column}>
              {Object.keys(this.props.selectedLog.content).map((category, index) => {
                if (index % columns.length === column && typeof this.props.selectedLog.content[category] !== 'string') {
                  return (
                    <LogDetail settings={this.props.settings} key={category} name={category} detail={this.props.selectedLog.content[category]}/>
                  )
                } else {
                  return null
                }
              })}
            </DetailsList>
          )
        })}
      </DesktopColumns>
    )

  }
}

export default connect(mapStateToProps)(LogDetails);
