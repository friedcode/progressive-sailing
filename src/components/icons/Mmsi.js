import React from "react";

function Mmsi(props) {
  return (
    <svg
      width={props.width || "63px"} height={props.height || "63px"}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path
        fill="#fff"
        d="M435 147.5c0-37.254-30.246-67.5-67.5-67.5h-135c-37.254 0-67.5 30.246-67.5 67.5v365c0 37.254 30.246 67.5 67.5 67.5h135c37.254 0 67.5-30.246 67.5-67.5v-365z"
      ></path>
      <path d="M367.936 80.001l.436.005.435.006.434.01.434.012.433.016.432.017.431.021.431.023.43.026.43.029.428.031.428.034.427.037.427.039.425.042.425.044.424.048.424.049.422.053.422.055.421.057.42.061.419.062.418.066.418.068.416.07.416.073.415.076.414.078.413.08.412.083.412.086.41.088.41.091.408.093.408.095.407.098.405.101.405.103.404.105.403.108.401.11.401.112.4.115.399.118.397.12.397.122.396.124.394.127.394.129.393.132.391.134.39.136.39.139.388.141.387.143.386.145.385.148.383.15.383.152.381.155.38.157.38.159.377.161.377.164.376.166.374.168.373.17.372.172.371.175.369.176.368.179.367.181.366.184.364.185.364.188.362.189.36.192.359.194.358.196.357.198.355.2.355.202.352.205.352.206.35.209.348.21.347.213.346.214.345.217.343.218.341.221.341.222.339.225.337.227.336.228.334.231.333.232.332.234.33.237.329.238.327.24.326.242.324.244.322.246.321.248.32.25.318.251.317.253.315.256.313.257.312.259.31.26.309.263.307.264.305.267.304.268.302.269.301.272.298.273.298.275.295.277.294.279.293.28.29.282.289.284.287.286.286.287.284.289.282.29.28.293.279.294.277.295.275.298.273.298.272.301.269.302.268.304.267.305.264.307.263.309.26.31.259.312.257.313.256.315.253.317.251.318.25.32.248.321.246.322.244.324.242.326.24.327.238.329.237.33.234.332.232.333.231.334.228.336.227.337.225.339.222.341.221.341.218.343.217.345.214.346.213.347.21.348.209.35.206.352.205.352.202.355.2.355.198.357.196.358.194.359.192.36.189.362.188.364.185.364.184.366.181.367.179.368.176.369.175.371.172.372.17.373.168.374.166.376.164.377.161.377.159.38.157.38.155.381.152.383.15.383.148.385.145.386.143.387.141.388.139.39.136.39.134.391.132.393.129.394.127.394.124.396.122.397.12.397.118.399.115.4.112.401.11.401.108.403.105.404.103.405.101.405.098.407.095.408.093.408.091.41.088.41.086.412.083.412.08.413.078.414.076.415.073.416.07.416.068.418.066.418.062.419.061.42.057.421.055.422.053.422.049.424.048.424.044.425.042.425.039.427.037.427.034.428.031.428.029.43.026.43.023.431.021.431.017.432.016.433.012.434.01.434.006.435.005.436.001.436v365l-.001.436-.005.436-.006.435-.01.434-.012.434-.016.433-.017.432-.021.431-.023.431-.026.43-.029.43-.031.428-.034.428-.037.427-.039.427-.042.425-.044.425-.048.424-.049.424-.053.422-.055.422-.057.421-.061.42-.062.419-.066.418-.068.418-.07.416-.073.416-.076.415-.078.414-.08.413-.083.412-.086.412-.088.41-.091.41-.093.408-.095.408-.098.407-.101.405-.103.405-.105.404-.108.403-.11.401-.112.401-.115.4-.118.399-.12.397-.122.397-.124.396-.127.394-.129.394-.132.393-.134.391-.136.39-.139.39-.141.388-.143.387-.145.386-.148.385-.15.383-.152.383-.155.381-.157.38-.159.38-.161.377-.164.377-.166.376-.168.374-.17.373-.172.372-.175.371-.176.369-.179.368-.181.367-.184.366-.185.364-.188.364-.189.362-.192.36-.194.359-.196.358-.198.357-.2.355-.202.355-.205.352-.206.352-.209.35-.21.348-.213.347-.214.346-.217.345-.218.343-.221.341-.222.341-.225.339-.227.337-.228.336-.231.334-.232.333-.234.332-.237.33-.238.329-.24.327-.242.326-.244.324-.246.322-.248.321-.25.32-.251.318-.253.317-.256.315-.257.313-.259.312-.26.31-.263.309-.264.307-.267.305-.268.304-.269.302-.272.301-.273.298-.275.298-.277.295-.279.294-.28.293-.282.29-.284.289-.286.287-.287.286-.289.284-.29.282-.293.28-.294.279-.295.277-.298.275-.298.273-.301.272-.302.269-.304.268-.305.267-.307.264-.309.263-.31.26-.312.259-.313.257-.315.256-.317.253-.318.251-.32.25-.321.248-.322.246-.324.244-.326.242-.327.24-.329.238-.33.237-.332.234-.333.232-.334.231-.336.228-.337.227-.339.225-.341.222-.341.221-.343.218-.345.217-.346.214-.347.213-.348.21-.35.209-.352.206-.352.205-.355.202-.355.2-.357.198-.358.196-.359.194-.36.192-.362.189-.364.188-.364.185-.366.184-.367.181-.368.179-.369.176-.371.175-.372.172-.373.17-.374.168-.376.166-.377.164-.377.161-.38.159-.38.157-.381.155-.383.152-.383.15-.385.148-.386.145-.387.143-.388.141-.39.139-.39.136-.391.134-.393.132-.394.129-.394.127-.396.124-.397.122-.397.12-.399.118-.4.115-.401.112-.401.11-.403.108-.404.105-.405.103-.405.101-.407.098-.408.095-.408.093-.41.091-.41.088-.412.086-.412.083-.413.08-.414.078-.415.076-.416.073-.416.07-.418.068-.418.066-.419.062-.42.061-.421.057-.422.055-.422.053-.424.049-.424.048-.425.044-.425.042-.427.039-.427.037-.428.034-.428.031-.43.029-.43.026-.431.023-.431.021-.432.017-.433.016-.434.012-.434.01-.435.006-.436.005-.436.001h-135l-.436-.001-.436-.005-.435-.006-.434-.01-.434-.012-.433-.016-.432-.017-.431-.021-.431-.023-.43-.026-.43-.029-.428-.031-.428-.034-.427-.037-.427-.039-.425-.042-.425-.044-.424-.048-.424-.049-.422-.053-.422-.055-.421-.057-.42-.061-.419-.062-.418-.066-.418-.068-.416-.07-.416-.073-.415-.076-.414-.078-.413-.08-.412-.083-.412-.086-.41-.088-.41-.091-.408-.093-.408-.095-.407-.098-.405-.101-.405-.103-.404-.105-.403-.108-.401-.11-.401-.112-.4-.115-.399-.118-.397-.12-.397-.122-.396-.124-.394-.127-.394-.129-.393-.132-.391-.134-.39-.136-.39-.139-.388-.141-.387-.143-.386-.145-.385-.148-.383-.15-.383-.152-.381-.155-.38-.157-.38-.159-.377-.161-.377-.164-.376-.166-.374-.168-.373-.17-.372-.172-.371-.175-.369-.176-.368-.179-.367-.181-.366-.184-.364-.185-.364-.188-.362-.189-.36-.192-.359-.194-.358-.196-.357-.198-.355-.2-.355-.202-.352-.205-.352-.206-.35-.209-.348-.21-.347-.213-.346-.214-.345-.217-.343-.218-.341-.221-.341-.222-.339-.225-.337-.227-.336-.228-.334-.231-.333-.232-.332-.234-.33-.237-.329-.238-.327-.24-.326-.242-.324-.244-.322-.246-.321-.248-.32-.25-.318-.251-.317-.253-.315-.256-.313-.257-.312-.259-.31-.26-.309-.263-.307-.264-.305-.267-.304-.268-.302-.269-.301-.272-.298-.273-.298-.275-.295-.277-.294-.279-.293-.28-.29-.282-.289-.284-.287-.286-.286-.287-.284-.289-.282-.29-.28-.293-.279-.294-.277-.295-.275-.298-.273-.298-.272-.301-.269-.302-.268-.304-.267-.305-.264-.307-.263-.309-.26-.31-.259-.312-.257-.313-.256-.315-.253-.317-.251-.318-.25-.32-.248-.321-.246-.322-.244-.324-.242-.326-.24-.327-.238-.329-.237-.33-.234-.332-.232-.333-.231-.334-.228-.336-.227-.337-.225-.339-.222-.341-.221-.341-.218-.343-.217-.345-.214-.346-.213-.347-.21-.348-.209-.35-.206-.352-.205-.352-.202-.355-.2-.355-.198-.357-.196-.358-.194-.359-.192-.36-.189-.362-.188-.364-.185-.364-.184-.366-.181-.367-.179-.368-.176-.369-.175-.371-.172-.372-.17-.373-.168-.374-.166-.376-.164-.377-.161-.377-.159-.38-.157-.38-.155-.381-.152-.383-.15-.383-.148-.385-.145-.386-.143-.387-.141-.388-.139-.39-.136-.39-.134-.391-.132-.393-.129-.394-.127-.394-.124-.396-.122-.397-.12-.397-.118-.399-.115-.4-.112-.401-.11-.401-.108-.403-.105-.404-.103-.405-.101-.405-.098-.407-.095-.408-.093-.408-.091-.41-.088-.41-.086-.412-.083-.412-.08-.413-.078-.414-.076-.415-.073-.416-.07-.416-.068-.418-.066-.418-.062-.419-.061-.42-.057-.421-.055-.422-.053-.422-.049-.424-.048-.424-.044-.425-.042-.425-.039-.427-.037-.427-.034-.428-.031-.428-.029-.43-.026-.43-.023-.431-.021-.431-.017-.432-.016-.433-.012-.434-.01-.434-.006-.435-.005-.436-.001-.436v-365l.001-.436.005-.436.006-.435.01-.434.012-.434.016-.433.017-.432.021-.431.023-.431.026-.43.029-.43.031-.428.034-.428.037-.427.039-.427.042-.425.044-.425.048-.424.049-.424.053-.422.055-.422.057-.421.061-.42.062-.419.066-.418.068-.418.07-.416.073-.416.076-.415.078-.414.08-.413.083-.412.086-.412.088-.41.091-.41.093-.408.095-.408.098-.407.101-.405.103-.405.105-.404.108-.403.11-.401.112-.401.115-.4.118-.399.12-.397.122-.397.124-.396.127-.394.129-.394.132-.393.134-.391.136-.39.139-.39.141-.388.143-.387.145-.386.148-.385.15-.383.152-.383.155-.381.157-.38.159-.38.161-.377.164-.377.166-.376.168-.374.17-.373.172-.372.175-.371.176-.369.179-.368.181-.367.184-.366.185-.364.188-.364.189-.362.192-.36.194-.359.196-.358.198-.357.2-.355.202-.355.205-.352.206-.352.209-.35.21-.348.213-.347.214-.346.217-.345.218-.343.221-.341.222-.341.225-.339.227-.337.228-.336.231-.334.232-.333.234-.332.237-.33.238-.329.24-.327.242-.326.244-.324.246-.322.248-.321.25-.32.251-.318.253-.317.256-.315.257-.313.259-.312.26-.31.263-.309.264-.307.267-.305.268-.304.269-.302.272-.301.273-.298.275-.298.277-.295.279-.294.28-.293.282-.29.284-.289.286-.287.287-.286.289-.284.29-.282.293-.28.294-.279.295-.277.298-.275.298-.273.301-.272.302-.269.304-.268.305-.267.307-.264.309-.263.31-.26.312-.259.313-.257.315-.256.317-.253.318-.251.32-.25.321-.248.322-.246.324-.244.326-.242.327-.24.329-.238.33-.237.332-.234.333-.232.334-.231.336-.228.337-.227.339-.225.341-.222.341-.221.343-.218.345-.217.346-.214.347-.213.348-.21.35-.209.352-.206.352-.205.355-.202.355-.2.357-.198.358-.196.359-.194.36-.192.362-.189.364-.188.364-.185.366-.184.367-.181.368-.179.369-.176.371-.175.372-.172.373-.17.374-.168.376-.166.377-.164.377-.161.38-.159.38-.157.381-.155.383-.152.383-.15.385-.148.386-.145.387-.143.388-.141.39-.139.39-.136.391-.134.393-.132.394-.129.394-.127.396-.124.397-.122.397-.12.399-.118.4-.115.401-.112.401-.11.403-.108.404-.105.405-.103.405-.101.407-.098.408-.095.408-.093.41-.091.41-.088.412-.086.412-.083.413-.08.414-.078.415-.076.416-.073.416-.07.418-.068.418-.066.419-.062.42-.061.421-.057.422-.055.422-.053.424-.049.424-.048.425-.044.425-.042.427-.039.427-.037.428-.034.428-.031.43-.029.43-.026.431-.023.431-.021.432-.017.433-.016.434-.012.434-.01.435-.006.436-.005.436-.001h135l.436.001zM232.547 110l-.293.001-.245.002-.245.004-.244.006-.244.007-.243.008-.242.01-.242.011-.24.013-.241.015-.24.016-.239.017-.239.019-.238.021-.237.022-.237.023-.237.025-.236.026-.235.028-.234.029-.234.03-.234.032-.233.034-.232.035-.232.036-.231.037-.231.039-.23.041-.23.042-.228.043-.229.044-.228.046-.227.048-.227.048-.226.05-.226.052-.225.052-.224.054-.225.056-.223.057-.222.058-.223.059-.222.061-.221.062-.221.064-.219.065-.22.066-.219.067-.218.069-.218.07-.217.071-.217.073-.216.074-.215.075-.215.076-.215.078-.213.079-.213.08-.213.082-.212.083-.212.084-.21.086-.21.086-.21.088-.209.089-.208.091-.207.091-.208.094-.207.094-.205.095-.205.097-.205.098-.204.099-.203.1-.203.102-.202.102-.201.104-.201.105-.2.107-.199.107-.199.109-.198.11-.197.111-.197.112-.195.114-.196.115-.194.115-.194.117-.193.118-.192.12-.192.12-.191.122-.19.123-.189.123-.189.125-.187.126-.188.128-.186.128-.185.13-.185.13-.185.132-.183.133-.182.134-.182.135-.18.136-.18.137-.179.138-.179.14-.177.14-.177.141-.176.143-.175.143-.174.145-.173.145-.172.147-.172.148-.17.149-.17.149-.169.151-.168.151-.167.154-.166.153-.165.155-.164.156-.164.156-.162.158-.161.158-.161.16-.16.16-.158.162-.158.162-.156.164-.156.164-.155.165-.153.166-.153.167-.152.168-.151.169-.149.17-.149.17-.148.172-.146.172-.146.173-.145.174-.143.175-.143.176-.141.177-.141.177-.139.179-.138.179-.137.18-.136.181-.135.181-.134.183-.133.183-.132.183-.13.186-.13.185-.128.186-.128.188-.125.187-.126.189-.124.189-.122.19-.122.191-.12.192-.12.192-.118.193-.117.194-.115.194-.115.195-.114.197-.112.196-.111.197-.11.198-.109.199-.107.199-.107.2-.105.201-.104.201-.102.202-.102.203-.1.203-.099.204-.098.205-.097.205-.095.205-.094.207-.094.207-.091.208-.09.208-.09.209-.088.21-.086.21-.086.211-.084.211-.083.212-.082.213-.08.213-.079.213-.078.214-.076.216-.076.215-.073.216-.073.216-.071.218-.07.218-.069.218-.067.219-.066.22-.065.22-.064.22-.062.222-.061.221-.059.222-.058.223-.057.223-.056.225-.054.224-.052.225-.052.225-.05.227-.048.227-.048.227-.046.228-.044.228-.044.23-.041.229-.041.23-.039.231-.037.231-.036.231-.035.233-.034.234-.032.232-.03.234-.029.236-.028.235-.026.235-.025.236-.023.238-.022.237-.021.238-.019.239-.017.239-.016.24-.015.24-.013.242-.011.241-.01.242-.008.243-.007.244-.006.244-.004.244-.002.246-.001.294v364.904l.001.294.002.246.004.244.006.244.007.244.008.242.01.243.011.241.013.242.015.241.016.239.017.239.019.239.021.238.022.237.023.238.025.236.026.235.028.235.029.236.03.234.032.232.034.234.035.233.036.231.037.231.039.231.041.231.041.228.044.23.044.228.046.227.047.228.049.227.05.227.052.225.052.225.054.224.056.224.057.224.058.223.059.222.061.222.062.221.064.22.064.22.067.22.067.219.069.218.07.218.071.217.073.217.074.216.075.215.077.216.077.214.079.213.08.213.082.213.083.212.084.212.086.21.086.21.088.209.09.21.09.208.092.208.092.207.095.206.095.206.097.206.098.204.099.204.1.203.102.203.102.202.104.201.105.2.107.201.107.199.109.199.11.198.111.197.112.197.114.195.114.195.116.195.117.194.118.193.12.193.12.191.122.191.122.189.124.19.126.19.125.186.128.187.129.188.128.184.131.185.132.184.132.183.135.184.135.181.136.181.137.179.138.179.139.178.141.178.142.178.142.174.144.176.144.174.145.173.147.172.147.171.15.172.15.169.149.168.153.169.153.167.153.166.155.166.156.164.156.163.157.161.159.162.161.162.16.159.161.158.161.157.165.158.164.156.165.153.166.155.168.153.167.151.169.151.17.15.171.149.171.147.171.146.175.146.174.145.174.143.175.142.177.142.179.141.178.139.178.138.182.138.18.135.18.135.184.135.183.132.183.132.185.13.185.129.187.129.188.128.188.126.188.124.19.125.19.123.189.12.192.121.193.119.194.119.193.117.194.115.196.115.195.113.197.113.197.111.198.11.2.109.199.108.199.106.2.104.201.104.203.103.203.102.204.101.203.098.203.097.208.098.205.096.205.093.208.093.209.093.208.09.207.088.211.089.209.086.211.086.214.085.211.082.21.081.213.08.215.08.215.078.215.076.214.075.217.074.218.073.217.072.217.069.217.069.22.067.22.067.219.064.222.064.221.062.222.061.221.059.222.058.225.057.225.056.223.054.225.052.226.052.225.05.228.048.227.048.228.046.229.044.229.044.229.041.229.04.232.04.233.038.229.035.231.035.235.034.235.032.234.03.234.029.234.028.236.026.237.025.236.023.237.022.24.021.237.019.239.017.242.016.24.015.24.013.241.011.245.01.243.009.24.006.244.006.247.004.246.002.293.001h134.904l.293-.001.246-.002.247-.004.244-.006.24-.006.243-.009.245-.01.241-.011.24-.013.24-.015.242-.016.239-.017.237-.019.24-.021.237-.022.236-.023.237-.025.236-.026.234-.028.234-.029.234-.03.236-.032.234-.034.231-.035.229-.035.233-.038.232-.04.229-.04.229-.041.229-.044.229-.044.228-.046.227-.048.228-.048.225-.05.226-.052.224-.052.224-.054.225-.056.225-.057.222-.058.221-.059.222-.061.221-.062.222-.064.219-.064.22-.067.22-.067.218-.069.216-.069.217-.072.218-.073.217-.074.214-.075.214-.076.216-.078.215-.08.213-.08.21-.081.211-.082.214-.085.211-.086.209-.086.211-.089.207-.088.208-.091.209-.092.208-.093.205-.093.205-.096.208-.098.203-.097.202-.098.205-.101.204-.102.202-.103.201-.103.2-.105.199-.106.2-.108.199-.109.198-.11.197-.111.197-.112.196-.114.195-.115.193-.115.194-.117.194-.119.193-.119.191-.121.189-.12.192-.124.189-.124.187-.123.19-.128.187-.127.187-.129.186-.13.184-.129.182-.131.184-.133.184-.135.18-.134.18-.136.182-.138.178-.138.178-.139.179-.142.176-.141.176-.142.174-.143.174-.144.174-.147.172-.146.171-.147.171-.149.17-.151.17-.151.167-.151.166-.152.167-.155.165-.153.164-.156.165-.158.162-.157.16-.158.16-.159.161-.162.159-.161.157-.163.157-.163.154-.163.156-.166.154-.167.152-.166.152-.169.151-.168.149-.17.149-.17.148-.172.147-.172.145-.173.145-.175.144-.175.141-.174.142-.178.141-.178.139-.178.138-.178.137-.18.136-.181.135-.182.134-.183.133-.183.132-.185.131-.184.128-.184.129-.188.127-.186.126-.187.126-.191.124-.189.122-.189.122-.191.119-.191.12-.193.119-.193.117-.194.116-.195.115-.195.112-.195.112-.196.112-.198.11-.199.109-.198.107-.199.107-.2.105-.201.104-.201.102-.202.102-.203.1-.203.1-.204.097-.204.097-.206.095-.206.095-.206.092-.207.092-.208.091-.209.088-.208.089-.21.086-.21.085-.21.085-.212.083-.212.081-.212.081-.214.079-.214.078-.214.076-.214.075-.216.075-.217.072-.216.071-.217.07-.218.069-.218.067-.219.066-.219.065-.22.064-.221.062-.221.061-.222.059-.223.058-.223.057-.223.055-.223.055-.225.052-.225.052-.226.05-.227.049-.226.047-.227.046-.228.044-.228.043-.229.042-.23.041-.231.039-.23.037-.23.036-.232.035-.233.034-.234.032-.233.03-.233.029-.235.028-.235.026-.237.025-.236.023-.236.022-.238.021-.238.019-.24.017-.239.016-.238.015-.241.013-.242.011-.241.01-.241.008-.244.007-.244.006-.244.004-.245.002-.245.001-.293V147.547l-.001-.293-.002-.245-.004-.245-.006-.244-.007-.244-.008-.244-.01-.241-.011-.241-.013-.242-.015-.24-.016-.239-.017-.24-.019-.239-.021-.238-.022-.238-.023-.236-.025-.236-.026-.237-.028-.235-.029-.235-.03-.233-.032-.233-.034-.234-.035-.233-.036-.232-.037-.23-.039-.23-.041-.231-.042-.23-.043-.229-.044-.228-.046-.228-.048-.227-.048-.226-.05-.227-.052-.226-.052-.225-.055-.225-.055-.224-.057-.222-.058-.223-.06-.224-.06-.22-.062-.221-.064-.222-.065-.22-.066-.219-.067-.219-.069-.219-.07-.217-.071-.217-.072-.216-.075-.217-.075-.216-.076-.214-.078-.214-.079-.215-.081-.213-.081-.212-.083-.212-.084-.212-.085-.21-.087-.21-.089-.211-.088-.207-.091-.209-.092-.208-.093-.207-.094-.207-.095-.205-.097-.205-.097-.205-.1-.204-.1-.203-.101-.203-.103-.202-.104-.201-.105-.201-.107-.2-.107-.199-.109-.199-.11-.198-.111-.197-.113-.197-.113-.195-.114-.195-.116-.195-.117-.194-.119-.193-.119-.193-.12-.191-.122-.19-.122-.191-.124-.189-.126-.189-.126-.188-.127-.187-.128-.186-.13-.185-.13-.185-.132-.184-.133-.184-.134-.182-.135-.181-.136-.182-.137-.18-.138-.178-.139-.179-.141-.177-.141-.177-.142-.175-.144-.175-.145-.175-.146-.173-.146-.172-.148-.172-.148-.17-.15-.17-.151-.169-.152-.168-.152-.166-.154-.167-.155-.165-.155-.164-.157-.163-.158-.163-.158-.162-.16-.16-.161-.16-.161-.158-.162-.158-.164-.157-.164-.155-.165-.155-.166-.154-.167-.152-.168-.152-.169-.151-.169-.149-.171-.149-.172-.148-.172-.147-.173-.145-.174-.144-.176-.144-.176-.143-.175-.141-.178-.14-.179-.14-.179-.138-.18-.137-.181-.136-.181-.135-.182-.134-.184-.133-.184-.132-.184-.13-.186-.13-.186-.128-.187-.127-.189-.127-.188-.125-.189-.123-.191-.123-.19-.122-.192-.12-.192-.119-.193-.119-.194-.117-.194-.115-.195-.115-.197-.114-.196-.112-.197-.111-.198-.11-.199-.109-.199-.107-.2-.107-.201-.105-.201-.104-.202-.102-.203-.102-.203-.1-.204-.099-.205-.098-.205-.097-.206-.095-.206-.095-.207-.092-.208-.092-.208-.091-.209-.089-.21-.088-.21-.086-.21-.086-.212-.084-.212-.083-.213-.082-.213-.08-.214-.079-.214-.078-.215-.076-.215-.075-.216-.074-.217-.073-.217-.071-.218-.07-.218-.069-.219-.067-.22-.067-.219-.064-.221-.064-.221-.062-.222-.061-.222-.059-.223-.058-.223-.057-.225-.056-.224-.054-.225-.052-.226-.052-.226-.05-.227-.048-.227-.048-.228-.046-.229-.044-.228-.043-.23-.042-.23-.041-.231-.039-.231-.037-.232-.037-.232-.034-.233-.034-.234-.032-.234-.03-.234-.029-.235-.028-.236-.026-.236-.025-.238-.023-.237-.022-.238-.021-.239-.019-.239-.017-.24-.016-.241-.015-.24-.013-.242-.011-.242-.01-.243-.008-.244-.007-.244-.006-.245-.004-.245-.002-.293-.001H232.547z"></path>
      <path fill="none" stroke="#000" strokeWidth="30" d="M360 90V30"></path>
      <path
        fill="#fff"
        d="M380 177.5c0-20.697-16.803-37.5-37.5-37.5h-85c-20.697 0-37.5 16.803-37.5 37.5v75c0 20.697 16.803 37.5 37.5 37.5h85c20.697 0 37.5-16.803 37.5-37.5v-75z"
      ></path>
      <path d="M342.742 140.001l.242.002.242.004.241.005.241.007.241.009.24.009.24.012.239.013.239.014.238.016.238.017.238.019.238.021.236.021.237.024.236.025.235.026.236.027.234.03.235.03.233.032.234.034.233.034.232.037.232.037.232.04.231.04.23.042.23.043.23.045.229.046.228.048.228.049.228.05.227.052.226.053.226.054.225.056.225.057.225.059.223.06.224.061.222.063.222.063.222.066.221.066.22.068.22.069.219.071.219.072.218.073.217.074.217.076.217.077.215.078.215.08.215.08.213.083.214.083.212.084.212.086.211.088.211.088.21.09.209.09.209.092.208.094.207.094.207.096.206.097.205.098.204.1.204.1.203.102.203.103.202.104.201.106.2.106.2.108.198.109.199.11.197.111.197.112.196.114.195.114.194.116.194.117.193.118.192.119.191.121.191.121.19.123.189.123.188.125.188.126.186.127.186.128.185.129.184.13.184.132.182.132.182.134.181.134.18.136.179.136.179.138.177.139.177.139.176.141.175.142.174.143.173.144.172.144.172.146.17.147.17.148.169.149.168.15.167.151.166.152.165.152.164.154.163.155.163.156.161.156.161.158.159.159.159.159.158.161.156.161.156.163.155.163.154.164.152.165.152.166.151.167.15.168.149.169.148.17.147.17.146.172.144.172.144.173.143.174.142.175.141.176.139.177.139.177.138.179.136.179.136.18.134.181.134.182.132.182.132.184.13.184.129.185.128.186.127.186.126.188.125.188.123.189.123.19.121.191.121.191.119.192.118.193.117.194.116.194.114.195.114.196.112.197.111.197.11.199.109.198.108.2.106.2.106.201.104.202.103.203.102.203.1.204.1.204.098.205.097.206.096.207.094.207.094.208.092.209.09.209.09.21.088.211.088.211.086.212.084.212.083.214.083.213.08.215.08.215.078.215.077.217.076.217.074.217.073.218.072.219.071.219.069.22.068.22.066.221.066.222.063.222.063.222.061.224.06.223.059.225.057.225.056.225.054.226.053.226.052.227.05.228.049.228.048.228.046.229.045.23.043.23.042.23.04.231.04.232.037.232.037.232.034.233.034.234.032.233.03.235.03.234.027.236.026.235.025.236.024.237.021.236.021.238.019.238.017.238.016.238.014.239.013.239.012.24.009.24.009.241.007.241.005.241.004.242.002.242.001.242v75l-.001.242-.002.242-.004.242-.005.241-.007.241-.009.241-.009.24-.012.24-.013.239-.014.239-.016.238-.017.238-.019.238-.021.238-.021.236-.024.237-.025.236-.026.235-.027.236-.03.234-.03.235-.032.233-.034.234-.034.233-.037.232-.037.232-.04.232-.04.231-.042.23-.043.23-.045.23-.046.229-.048.228-.049.228-.05.228-.052.227-.053.226-.054.226-.056.225-.057.225-.059.225-.06.223-.061.224-.063.222-.063.222-.066.222-.066.221-.068.22-.069.22-.071.219-.072.219-.073.218-.074.217-.076.217-.077.217-.078.215-.08.215-.08.215-.083.213-.083.214-.084.212-.086.212-.088.211-.088.211-.09.21-.09.209-.092.209-.094.208-.094.207-.096.207-.097.206-.098.205-.1.204-.1.204-.102.203-.103.203-.104.202-.106.201-.106.2-.108.2-.109.198-.11.199-.111.197-.112.197-.114.196-.114.195-.116.194-.117.194-.118.193-.119.192-.121.191-.121.191-.123.19-.123.189-.125.188-.126.188-.127.186-.128.186-.129.185-.13.184-.132.184-.132.182-.134.182-.134.181-.136.18-.136.179-.138.179-.139.177-.139.177-.141.176-.142.175-.143.174-.144.173-.144.172-.146.172-.147.17-.148.17-.149.169-.15.168-.151.167-.152.166-.152.165-.154.164-.155.163-.156.163-.156.161-.158.161-.159.159-.159.159-.161.158-.161.156-.163.156-.163.155-.164.154-.165.152-.166.152-.167.151-.168.15-.169.149-.17.148-.17.147-.172.146-.172.144-.173.144-.174.143-.175.142-.176.141-.177.139-.177.139-.179.138-.179.136-.18.136-.181.134-.182.134-.182.132-.184.132-.184.13-.185.129-.186.128-.186.127-.188.126-.188.125-.189.123-.19.123-.191.121-.191.121-.192.119-.193.118-.194.117-.194.116-.195.114-.196.114-.197.112-.197.111-.199.11-.198.109-.2.108-.2.106-.201.106-.202.104-.203.103-.203.102-.204.1-.204.1-.205.098-.206.097-.207.096-.207.094-.208.094-.209.092-.209.09-.21.09-.211.088-.211.088-.212.086-.212.084-.214.083-.213.083-.215.08-.215.08-.215.078-.217.077-.217.076-.217.074-.218.073-.219.072-.219.071-.22.069-.22.068-.221.066-.222.066-.222.063-.222.063-.224.061-.223.06-.225.059-.225.057-.225.056-.226.054-.226.053-.227.052-.228.05-.228.049-.228.048-.229.046-.23.045-.23.043-.23.042-.231.04-.232.04-.232.037-.232.037-.233.034-.234.034-.233.032-.235.03-.234.03-.236.027-.235.026-.236.025-.237.024-.236.021-.238.021-.238.019-.238.017-.238.016-.239.014-.239.013-.24.012-.24.009-.241.009-.241.007-.241.005-.242.004-.242.002-.242.001h-85l-.242-.001-.242-.002-.242-.004-.241-.005-.241-.007-.241-.009-.24-.009-.24-.012-.239-.013-.239-.014-.238-.016-.238-.017-.238-.019-.238-.021-.236-.021-.237-.024-.236-.025-.235-.026-.236-.027-.234-.03-.235-.03-.233-.032-.234-.034-.233-.034-.232-.037-.232-.037-.232-.04-.231-.04-.23-.042-.23-.043-.23-.045-.229-.046-.228-.048-.228-.049-.228-.05-.227-.052-.226-.053-.226-.054-.225-.056-.225-.057-.225-.059-.223-.06-.224-.061-.222-.063-.222-.063-.222-.066-.221-.066-.22-.068-.22-.069-.219-.071-.219-.072-.218-.073-.217-.074-.217-.076-.217-.077-.215-.078-.215-.08-.215-.08-.213-.083-.214-.083-.212-.084-.212-.086-.211-.088-.211-.088-.21-.09-.209-.09-.209-.092-.208-.094-.207-.094-.207-.096-.206-.097-.205-.098-.204-.1-.204-.1-.203-.102-.203-.103-.202-.104-.201-.106-.2-.106-.2-.108-.198-.109-.199-.11-.197-.111-.197-.112-.196-.114-.195-.114-.194-.116-.194-.117-.193-.118-.192-.119-.191-.121-.191-.121-.19-.123-.189-.123-.188-.125-.188-.126-.186-.127-.186-.128-.185-.129-.184-.13-.184-.132-.182-.132-.182-.134-.181-.134-.18-.136-.179-.136-.179-.138-.177-.139-.177-.139-.176-.141-.175-.142-.174-.143-.173-.144-.172-.144-.172-.146-.17-.147-.17-.148-.169-.149-.168-.15-.167-.151-.166-.152-.165-.152-.164-.154-.163-.155-.163-.156-.161-.156-.161-.158-.159-.159-.159-.159-.158-.161-.156-.161-.156-.163-.155-.163-.154-.164-.152-.165-.152-.166-.151-.167-.15-.168-.149-.169-.148-.17-.147-.17-.146-.172-.144-.172-.144-.173-.143-.174-.142-.175-.141-.176-.139-.177-.139-.177-.138-.179-.136-.179-.136-.18-.134-.181-.134-.182-.132-.182-.132-.184-.13-.184-.129-.185-.128-.186-.127-.186-.126-.188-.125-.188-.123-.189-.123-.19-.121-.191-.121-.191-.119-.192-.118-.193-.117-.194-.116-.194-.114-.195-.114-.196-.112-.197-.111-.197-.11-.199-.109-.198-.108-.2-.106-.2-.106-.201-.104-.202-.103-.203-.102-.203-.1-.204-.1-.204-.098-.205-.097-.206-.096-.207-.094-.207-.094-.208-.092-.209-.09-.209-.09-.21-.088-.211-.088-.211-.086-.212-.084-.212-.083-.214-.083-.213-.08-.215-.08-.215-.078-.215-.077-.217-.076-.217-.074-.217-.073-.218-.072-.219-.071-.219-.069-.22-.068-.22-.066-.221-.066-.222-.063-.222-.063-.222-.061-.224-.06-.223-.059-.225-.057-.225-.056-.225-.054-.226-.053-.226-.052-.227-.05-.228-.049-.228-.048-.228-.046-.229-.045-.23-.043-.23-.042-.23-.04-.231-.04-.232-.037-.232-.037-.232-.034-.233-.034-.234-.032-.233-.03-.235-.03-.234-.027-.236-.026-.235-.025-.236-.024-.237-.021-.236-.021-.238-.019-.238-.017-.238-.016-.238-.014-.239-.013-.239-.012-.24-.009-.24-.009-.241-.007-.241-.005-.241-.004-.242-.002-.242-.001-.242v-75l.001-.242.002-.242.004-.242.005-.241.007-.241.009-.241.009-.24.012-.24.013-.239.014-.239.016-.238.017-.238.019-.238.021-.238.021-.236.024-.237.025-.236.026-.235.027-.236.03-.234.03-.235.032-.233.034-.234.034-.233.037-.232.037-.232.04-.232.04-.231.042-.23.043-.23.045-.23.046-.229.048-.228.049-.228.05-.228.052-.227.053-.226.054-.226.056-.225.057-.225.059-.225.06-.223.061-.224.063-.222.063-.222.066-.222.066-.221.068-.22.069-.22.071-.219.072-.219.073-.218.074-.217.076-.217.077-.217.078-.215.08-.215.08-.215.083-.213.083-.214.084-.212.086-.212.088-.211.088-.211.09-.21.09-.209.092-.209.094-.208.094-.207.096-.207.097-.206.098-.205.1-.204.1-.204.102-.203.103-.203.104-.202.106-.201.106-.2.108-.2.109-.198.11-.199.111-.197.112-.197.114-.196.114-.195.116-.194.117-.194.118-.193.119-.192.121-.191.121-.191.123-.19.123-.189.125-.188.126-.188.127-.186.128-.186.129-.185.13-.184.132-.184.132-.182.134-.182.134-.181.136-.18.136-.179.138-.179.139-.177.139-.177.141-.176.142-.175.143-.174.144-.173.144-.172.146-.172.147-.17.148-.17.149-.169.15-.168.151-.167.152-.166.152-.165.154-.164.155-.163.156-.163.156-.161.158-.161.159-.159.159-.159.161-.158.161-.156.163-.156.163-.155.164-.154.165-.152.166-.152.167-.151.168-.15.169-.149.17-.148.17-.147.172-.146.172-.144.173-.144.174-.143.175-.142.176-.141.177-.139.177-.139.179-.138.179-.136.18-.136.181-.134.182-.134.182-.132.184-.132.184-.13.185-.129.186-.128.186-.127.188-.126.188-.125.189-.123.19-.123.191-.121.191-.121.192-.119.193-.118.194-.117.194-.116.195-.114.196-.114.197-.112.197-.111.199-.11.198-.109.2-.108.2-.106.201-.106.202-.104.203-.103.203-.102.204-.1.204-.1.205-.098.206-.097.207-.096.207-.094.208-.094.209-.092.209-.09.21-.09.211-.088.211-.088.212-.086.212-.084.214-.083.213-.083.215-.08.215-.08.215-.078.217-.077.217-.076.217-.074.218-.073.219-.072.219-.071.22-.069.22-.068.221-.066.222-.066.222-.063.222-.063.224-.061.223-.06.225-.059.225-.057.225-.056.226-.054.226-.053.227-.052.228-.05.228-.049.228-.048.229-.046.23-.045.23-.043.23-.042.231-.04.232-.04.232-.037.232-.037.233-.034.234-.034.233-.032.235-.03.234-.03.236-.027.235-.026.236-.025.237-.024.236-.021.238-.021.238-.019.238-.017.238-.016.239-.014.239-.013.24-.012.24-.009.241-.009.241-.007.241-.005.242-.004.242-.002.242-.001h85l.242.001zM257.547 170h-.099l-.051.001-.053.001-.05.001-.05.001-.052.002-.051.002-.048.002-.049.003-.051.003-.049.003-.049.004-.048.004-.048.004-.048.004-.048.005-.047.005-.047.005-.048.006-.047.006-.046.006-.048.006-.045.007-.046.007-.046.007-.045.007-.046.008-.045.008-.045.008-.046.009-.045.008-.043.009-.046.01-.044.009-.044.01-.044.01-.044.01-.044.011-.043.011-.045.011-.042.011-.044.011-.043.012-.043.012-.043.013-.042.012-.043.013-.043.013-.043.014-.042.013-.042.014-.042.014-.041.014-.043.015-.043.015-.041.016-.042.015-.041.016-.042.016-.041.016-.042.016-.042.017-.04.017-.041.017-.042.018-.04.017-.04.018-.041.019-.041.018-.041.019-.04.019-.04.019-.041.02-.041.02-.039.02-.04.02-.04.021-.04.021-.039.021-.04.021-.04.022-.039.022-.039.022-.039.022-.04.023-.039.023-.039.023-.039.024-.038.023-.039.024-.038.024-.039.025-.038.025-.038.024-.038.026-.038.025-.037.025-.039.027-.037.026-.038.026-.036.027-.038.027-.037.027-.037.028-.037.027-.036.028-.036.028-.037.029-.036.028-.036.029-.035.028-.037.031-.035.029-.035.029-.035.03-.035.03-.035.031-.035.031-.035.03-.034.031-.034.032-.034.031-.033.031-.034.032-.034.033-.033.032-.033.033-.033.032-.032.033-.033.033-.032.033-.033.034-.032.034-.031.033-.031.034-.032.034-.031.034-.03.035-.031.035-.031.035-.03.035-.03.035-.029.035-.029.035-.031.037-.028.035-.029.036-.028.036-.029.037-.028.036-.028.036-.027.037-.028.037-.027.037-.027.038-.027.036-.026.038-.026.037-.027.039-.025.037-.025.038-.026.038-.024.038-.025.038-.025.039-.024.038-.024.039-.023.038-.024.039-.023.039-.023.039-.023.04-.022.039-.022.039-.022.039-.022.04-.021.04-.021.039-.021.04-.021.04-.02.04-.02.039-.02.041-.02.041-.019.04-.019.04-.019.041-.018.041-.019.041-.018.04-.017.04-.018.042-.017.041-.017.04-.017.042-.016.042-.016.041-.016.042-.016.041-.015.042-.016.041-.015.043-.015.043-.014.041-.014.042-.014.042-.013.042-.014.043-.013.043-.013.043-.012.042-.013.043-.012.043-.012.043-.011.044-.011.042-.011.045-.011.043-.011.044-.01.044-.01.044-.01.044-.009.044-.01.046-.009.043-.008.045-.009.046-.008.045-.008.045-.008.046-.007.045-.007.046-.007.046-.007.045-.006.048-.006.046-.006.047-.006.048-.005.047-.005.047-.005.048-.004.048-.004.048-.004.048-.004.049-.003.049-.003.051-.003.049-.002.048-.002.051-.002.052-.001.05-.001.05-.001.053-.001.051V252.552l.001.051.001.053.001.05.001.05.002.052.002.051.002.048.003.049.003.051.003.049.004.049.004.048.004.048.004.048.005.048.005.047.005.047.006.048.006.047.006.046.006.048.007.045.007.046.007.046.007.045.008.046.008.045.008.045.009.046.008.045.009.043.01.046.009.044.01.044.01.044.01.044.011.044.011.043.011.045.011.042.012.044.011.043.012.043.013.044.012.042.013.042.013.043.014.042.013.042.014.043.015.043.014.041.014.042.015.043.016.042.015.041.015.041.017.042.016.041.016.042.017.041.017.041.017.041.018.042.017.04.018.041.019.041.018.04.019.04.019.041.019.04.02.041.02.041.02.039.02.04.021.04.021.04.021.04.021.039.022.04.022.039.022.039.022.04.023.039.023.039.024.04.023.038.023.037.024.04.025.039.024.039.025.037.024.038.025.037.026.039.026.038.026.038.026.037.027.038.026.036.027.037.028.039.027.036.027.036.028.037.028.036.029.037.028.036.029.036.029.036.029.036.03.035.03.035.029.035.03.035.031.035.031.036.031.034.03.033.032.035.031.034.031.033.032.034.032.034.033.034.033.033.032.032.033.032.032.032.033.033.035.033.034.032.033.031.034.031.034.031.034.032.035.031.035.03.035.031.035.03.035.03.035.029.035.03.036.029.036.029.037.03.035.027.036.029.036.027.037.029.038.028.036.027.036.027.039.027.036.027.038.026.038.026.037.026.037.026.039.025.039.026.036.024.039.025.039.025.039.024.039.024.037.023.039.024.038.023.04.023.04.023.04.023.038.021.038.022.041.022.04.021.04.022.039.02.039.02.041.021.04.02.04.02.039.019.042.02.04.019.041.019.041.018.04.018.042.019.041.018.04.017.04.017.041.017.042.017.043.017.041.016.04.015.042.016.042.015.041.016.043.015.042.014.042.015.042.014.043.014.04.013.043.013.044.014.042.013.045.013.041.012.042.011.045.013.042.011.044.011.044.011.043.011.045.011.043.01.044.01.043.01.045.009.045.01.044.009.046.009.045.008.045.008.046.008.045.008.045.007.046.007.045.007.046.007.047.006.047.006.049.006.047.006.046.005.046.005.048.005.048.004.049.004.048.004.049.004.05.003.049.003.049.003.05.002.052.002.05.002.049.001.052.001.051.001.051.001h85.106l.051-.001.051-.001.052-.001.049-.001.05-.002.052-.002.05-.002.049-.003.049-.003.05-.003.049-.004.048-.004.049-.004.048-.004.048-.005.046-.005.046-.005.048-.006.048-.006.047-.006.047-.006.046-.007.045-.007.046-.007.046-.007.044-.008.046-.008.046-.008.044-.008.045-.009.045-.009.045-.01.045-.009.043-.01.044-.01.044-.01.044-.011.044-.011.043-.011.044-.011.042-.011.045-.013.042-.011.042-.012.045-.014.041-.012.044-.014.042-.013.04-.013.044-.014.043-.015.042-.014.041-.014.043-.015.042-.016.041-.015.042-.016.04-.015.041-.016.043-.017.041-.017.042-.017.04-.017.04-.017.041-.018.043-.019.04-.018.04-.018.04-.019.041-.019.042-.02.039-.019.04-.02.041-.02.039-.02.04-.021.039-.02.041-.022.039-.021.04-.022.039-.022.038-.021.041-.023.039-.023.04-.023.039-.024.038-.023.037-.022.038-.024.041-.026.039-.025.038-.024.036-.024.038-.025.04-.026.038-.026.036-.026.038-.026.038-.027.036-.026.038-.027.037-.027.036-.027.037-.028.037-.028.037-.028.036-.029.035-.027.037-.03.036-.029.035-.029.036-.03.035-.03.035-.029.035-.03.035-.031.035-.031.035-.031.034-.03.034-.032.033-.03.034-.032.034-.032.034-.033.035-.033.032-.032.032-.032.032-.032.032-.032.033-.035.033-.034.032-.034.032-.034.03-.033.032-.034.03-.034.031-.035.031-.035.031-.035.03-.035.029-.035.03-.035.03-.036.029-.035.029-.036.03-.037.027-.035.029-.036.028-.037.028-.037.028-.037.027-.036.027-.037.027-.038.026-.036.027-.038.026-.038.026-.036.026-.038.026-.04.025-.038.024-.036.024-.038.025-.039.026-.041.024-.038.022-.037.023-.038.024-.039.023-.04.023-.039.023-.041.021-.038.022-.039.022-.04.021-.039.022-.041.02-.039.021-.04.02-.039.02-.041.02-.04.019-.039.02-.042.019-.041.019-.04.018-.04.018-.04.019-.043.018-.041.017-.04.017-.04.017-.042.017-.041.017-.043.016-.041.015-.04.016-.042.015-.041.016-.042.015-.043.014-.041.014-.042.015-.043.014-.044.013-.04.013-.042.014-.044.012-.041.014-.045.012-.042.011-.042.013-.045.011-.042.011-.044.011-.044.011-.043.011-.045.01-.043.01-.044.01-.043.009-.045.01-.045.009-.044.009-.046.008-.045.008-.045.008-.046.008-.045.007-.045.007-.046.007-.045.007-.046.006-.047.006-.047.006-.049.006-.047.005-.046.005-.046.005-.048.004-.048.004-.049.004-.048.004-.049.003-.05.003-.049.003-.049.002-.05.002-.052.002-.05.001-.049.001-.052.001-.051.001-.051v-75.106l-.001-.051-.001-.051-.001-.052-.001-.049-.002-.05-.002-.052-.002-.05-.003-.049-.003-.049-.003-.05-.004-.049-.004-.048-.004-.049-.004-.048-.005-.048-.005-.046-.005-.046-.006-.047-.006-.049-.006-.047-.006-.047-.007-.046-.007-.045-.007-.046-.007-.045-.008-.045-.008-.046-.008-.045-.008-.045-.009-.046-.009-.044-.01-.045-.009-.045-.01-.043-.01-.044-.01-.043-.011-.045-.011-.043-.011-.044-.011-.044-.011-.042-.013-.045-.011-.042-.012-.041-.013-.045-.013-.042-.014-.044-.013-.043-.013-.04-.014-.043-.014-.042-.015-.042-.014-.042-.015-.043-.016-.041-.015-.042-.016-.042-.015-.04-.016-.041-.017-.043-.017-.042-.017-.041-.017-.04-.017-.04-.018-.041-.019-.042-.018-.04-.018-.041-.019-.041-.019-.04-.02-.042-.019-.039-.02-.04-.02-.04-.021-.041-.02-.039-.02-.039-.022-.04-.021-.04-.022-.041-.022-.038-.021-.038-.023-.04-.023-.04-.023-.04-.023-.038-.024-.039-.023-.037-.024-.039-.024-.039-.025-.039-.025-.039-.024-.036-.026-.039-.025-.039-.026-.037-.026-.037-.026-.038-.026-.038-.027-.036-.027-.039-.027-.036-.027-.036-.028-.038-.029-.037-.027-.036-.029-.036-.027-.035-.03-.037-.029-.036-.029-.036-.03-.035-.029-.035-.03-.035-.03-.035-.031-.035-.03-.035-.031-.035-.032-.034-.031-.034-.031-.034-.031-.033-.032-.034-.033-.035-.033-.033-.032-.032-.032-.033-.032-.032-.033-.033-.034-.033-.034-.032-.034-.032-.033-.031-.034-.031-.035-.032-.033-.03-.034-.031-.036-.031-.035-.031-.035-.03-.035-.029-.035-.03-.035-.03-.036-.029-.036-.029-.036-.029-.036-.028-.037-.029-.036-.028-.037-.028-.036-.027-.036-.027-.039-.028-.037-.027-.036-.026-.038-.027-.037-.026-.038-.026-.038-.026-.039-.026-.037-.025-.038-.024-.037-.025-.039-.024-.039-.025-.04-.024-.037-.023-.038-.023-.04-.024-.039-.023-.039-.023-.04-.022-.039-.022-.039-.022-.04-.022-.039-.021-.04-.021-.04-.021-.04-.021-.04-.02-.039-.02-.041-.02-.041-.02-.04-.019-.041-.019-.04-.019-.04-.018-.041-.019-.041-.018-.04-.017-.042-.018-.041-.017-.041-.017-.041-.017-.042-.016-.041-.016-.042-.017-.041-.015-.041-.015-.042-.016-.043-.015-.042-.014-.041-.014-.043-.015-.043-.014-.042-.013-.042-.014-.043-.013-.042-.013-.042-.012-.044-.013-.043-.012-.043-.011-.044-.012-.042-.011-.044-.011-.044-.011-.043-.011-.045-.01-.044-.01-.044-.01-.044-.009-.046-.01-.044-.009-.044-.008-.045-.009-.046-.008-.045-.008-.045-.008-.046-.007-.046-.007-.046-.007-.045-.007-.048-.006-.046-.006-.047-.006-.048-.006-.047-.005-.047-.005-.048-.005-.048-.004-.048-.004-.048-.004-.049-.004-.049-.003-.051-.003-.049-.003-.048-.002-.051-.002-.052-.002-.05-.001-.05-.001-.053-.001-.051-.001H257.547zM260 342.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM260 417.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM260 492.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM320 342.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM320 417.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM320 492.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM380 342.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM380 417.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15zM380 492.5c0-4.139-3.361-7.5-7.5-7.5h-25a7.504 7.504 0 00-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h25c4.139 0 7.5-3.361 7.5-7.5v-15z"></path>
    </svg>
  );
}

export default Mmsi;