import type {IconSvgProps} from "./types";

export const MasterCardIcon: React.FC<IconSvgProps> = ({width = 24, height = 24, ...props}) => {
    return (
        <svg fill="none" height={height} viewBox="0 0 512 512" width={width} {...props}>
            <path d="M325.228 131.82H186.781V380.612H325.228V131.82Z" fill="#FF5F00" />
            <path
                d="M195.571 256.225C195.549 232.264 200.978 208.613 211.448 187.061C221.919 165.509 237.155 146.622 256.003 131.829C232.662 113.482 204.629 102.072 175.11 98.9037C145.591 95.7353 115.776 100.936 89.0725 113.912C62.3692 126.887 39.8553 147.114 24.1041 172.28C8.35298 197.446 0 226.536 0 256.225C0 285.914 8.35298 315.004 24.1041 340.17C39.8553 365.336 62.3692 385.562 89.0725 398.538C115.776 411.513 145.591 416.714 175.11 413.546C204.629 410.378 232.662 398.968 256.003 380.621C237.155 365.828 221.919 346.941 211.449 325.389C200.979 303.837 195.549 280.185 195.571 256.225Z"
                fill="#EB001B"
            />
            <path
                d="M512 256.225C512.001 285.913 503.649 315.003 487.899 340.169C472.149 365.335 449.636 385.562 422.933 398.538C396.23 411.513 366.415 416.714 336.896 413.546C307.378 410.378 279.346 398.968 256.005 380.621C274.837 365.813 290.061 346.922 300.529 325.374C310.998 303.825 316.437 280.181 316.437 256.225C316.437 232.268 310.998 208.624 300.529 187.076C290.061 165.527 274.837 146.637 256.005 131.828C279.346 113.482 307.378 102.072 336.896 98.9036C366.415 95.7353 396.23 100.936 422.933 113.912C449.636 126.888 472.149 147.114 487.899 172.28C503.649 197.447 512.001 226.536 512 256.225Z"
                fill="#F79E1B"
            />
            <path
                d="M496.905 354.265V349.171H498.959V348.134H493.729V349.171H495.783V354.265H496.905ZM507.06 354.265V348.124H505.457L503.613 352.348L501.768 348.124H500.164V354.265H501.296V349.632L503.026 353.626H504.199L505.929 349.622V354.265H507.06Z"
                fill="#F79E1B"
            />
        </svg>
    );
};

export const VisaIcon: React.FC<IconSvgProps> = ({width = 24, height = 24, ...props}) => {
    return (
        <svg fill="none" height={height} viewBox="0 0 512 512" width={width} {...props}>
            <path
                d="M253.509 175.921L219.303 335.84H177.929L212.138 175.921H253.509ZM427.568 279.182L449.343 219.13L461.874 279.182H427.568ZM473.744 335.84H512L478.578 175.921H443.29C435.337 175.921 428.632 180.532 425.665 187.643L363.587 335.84H407.037L415.662 311.957H468.734L473.744 335.84ZM365.742 283.632C365.921 241.426 307.397 239.088 307.789 220.23C307.915 214.5 313.382 208.397 325.331 206.836C331.255 206.073 347.603 205.454 366.134 213.993L373.381 180.068C363.429 176.467 350.62 173 334.683 173C293.783 173 265.012 194.725 264.782 225.859C264.519 248.883 285.334 261.72 300.984 269.388C317.119 277.226 322.525 282.251 322.446 289.254C322.335 299.983 309.58 304.734 297.704 304.914C276.892 305.238 264.828 299.289 255.214 294.807L247.704 329.866C257.387 334.297 275.227 338.153 293.7 338.351C337.183 338.351 365.612 316.881 365.742 283.632ZM194.391 175.921L127.357 335.84H83.6302L50.64 208.213C48.6401 200.365 46.8957 197.48 40.8134 194.164C30.8645 188.761 14.4413 183.708 0 180.564L0.978353 175.921H71.3758C80.3427 175.921 88.4104 181.888 90.4642 192.218L107.891 284.765L150.927 175.921H194.391Z"
                fill="#1434CB"
            />
        </svg>
    );
};

export const PayPalIcon: React.FC<IconSvgProps> = ({width = 24, height = 24, ...props}) => {
    return (
        <svg fill="none" height={height} viewBox="0 0 512 512" width={width} {...props}>
            <path
                d="M345.495 188.005H305.665C302.946 188.005 300.628 189.985 300.203 192.675L284.097 294.794C283.776 296.809 285.337 298.626 287.369 298.626H307.808C309.706 298.626 311.331 297.24 311.628 295.353L316.199 266.407C316.618 263.711 318.942 261.731 321.661 261.731H334.262C360.501 261.731 375.635 249.037 379.595 223.881C381.382 212.876 379.664 204.228 374.511 198.172C368.857 191.522 358.824 188.005 345.495 188.005ZM350.089 225.302C347.917 239.592 336.999 239.592 326.436 239.592H320.433L324.654 212.905C324.905 211.292 326.29 210.104 327.927 210.104H330.681C337.867 210.104 344.656 210.104 348.162 214.203C350.252 216.649 350.887 220.282 350.089 225.302Z"
                fill="#179BD7"
            />
            <path
                d="M464.528 224.843H445.469C443.833 224.843 442.441 226.03 442.197 227.643L441.353 232.977L440.013 231.044C435.885 225.052 426.684 223.049 417.496 223.049C396.422 223.049 378.429 239.01 374.923 261.4C373.107 272.568 375.686 283.248 382.022 290.695C387.845 297.543 396.148 300.396 406.042 300.396C423.022 300.396 432.437 289.478 432.437 289.478L431.587 294.777C431.267 296.804 432.828 298.62 434.872 298.62H452.044C454.763 298.62 457.081 296.641 457.506 293.945L467.818 228.674C468.133 226.665 466.572 224.843 464.528 224.843ZM437.946 261.959C436.118 272.853 427.459 280.167 416.43 280.167C410.904 280.167 406.467 278.391 403.625 275.025C400.807 271.683 399.747 266.926 400.632 261.627C402.362 250.825 411.143 243.272 422.003 243.272C427.418 243.272 431.82 245.072 434.72 248.467C437.637 251.896 438.79 256.683 437.946 261.959Z"
                fill="#179BD7"
            />
            <path
                d="M487.012 190.807L470.667 294.794C470.347 296.809 471.907 298.626 473.94 298.626H490.372C493.103 298.626 495.421 296.646 495.84 293.95L511.958 191.837C512.278 189.823 510.718 188 508.686 188H490.285C488.66 188.006 487.263 189.194 487.012 190.807Z"
                fill="#179BD7"
            />
            <path
                d="M61.4399 188.005H21.6162C18.891 188.005 16.5734 189.985 16.1483 192.675L0.0418073 294.794C-0.27846 296.809 1.28211 298.626 3.32599 298.626H22.3382C25.0634 298.626 27.381 296.646 27.806 293.95L32.15 266.407C32.5693 263.711 34.8927 261.731 37.612 261.731H50.2189C76.4517 261.731 91.5916 249.037 95.5454 223.881C97.3273 212.876 95.6211 204.228 90.4677 198.172C84.8077 191.522 74.7688 188.005 61.4399 188.005ZM66.0343 225.302C63.8564 239.592 52.9383 239.592 42.3811 239.592H36.3717L40.5876 212.905C40.838 211.292 42.2355 210.104 43.866 210.104H46.6203C53.8117 210.104 60.5955 210.104 64.101 214.203C66.1915 216.649 66.832 220.282 66.0343 225.302Z"
                fill="#253B80"
            />
            <path
                d="M180.481 224.843H161.411C159.786 224.843 158.383 226.03 158.132 227.643L157.288 232.977L155.955 231.044C151.826 225.052 142.62 223.049 133.431 223.049C112.357 223.049 94.3584 239.01 90.853 261.4C89.0304 272.568 91.6216 283.248 97.9571 290.695C103.768 297.543 112.084 300.396 121.977 300.396C138.957 300.396 148.373 289.478 148.373 289.478L147.523 294.777C147.202 296.804 148.763 298.62 150.795 298.62H167.973C170.704 298.62 173.01 296.641 173.441 293.945L183.748 228.674C184.074 226.665 182.519 224.843 180.481 224.843ZM153.899 261.959C152.059 272.853 143.412 280.167 132.383 280.167C126.845 280.167 122.42 278.391 119.578 275.025C116.76 271.683 115.688 266.926 116.585 261.627C118.303 250.825 127.096 243.272 137.956 243.272C143.371 243.272 147.773 245.072 150.673 248.467C153.579 251.896 154.732 256.683 153.899 261.959Z"
                fill="#253B80"
            />
            <path
                d="M282.047 224.842H262.883C261.055 224.842 259.337 225.75 258.3 227.27L231.87 266.203L220.666 228.79C219.962 226.449 217.801 224.842 215.356 224.842H196.524C194.235 224.842 192.646 227.078 193.374 229.232L214.482 291.178L194.637 319.192C193.077 321.399 194.649 324.433 197.345 324.433H216.485C218.302 324.433 220.002 323.548 221.033 322.057L284.772 230.053C286.298 227.852 284.731 224.842 282.047 224.842Z"
                fill="#253B80"
            />
        </svg>
    );
};
