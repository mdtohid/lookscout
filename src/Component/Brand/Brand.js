import React from 'react';

const Brand = () => {
    return (
        <div className='px-4 sm:px-8 lg:px-20 my-16'>
            <h1 className='text-center text-3xl font-semibold mb-4'>Proud to Be Used By</h1>
            <p className='text-center lg:w-7/12 mx-auto'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>

            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:gap-16 gap-y-8 lg:gap-y-0 justify-items-center my-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M95.4063 19.9347C96.7176 23.1789 99.6171 25.5017 103.109 26.1147C105.151 26.4692 108.205 25.9297 110.228 24.8544C111.91 23.9584 112.179 23.6216 111.891 22.7882C111.753 22.3848 111.662 20.4772 111.662 17.9263V13.7224L102.971 13.6039V18.1789L106.178 18.1544L106.247 18.9603C106.329 19.9435 106.104 20.1139 104.733 20.1139C103.41 20.1139 102.268 19.4852 101.431 18.2935C100.889 17.5258 100.803 17.2183 100.81 16.1235C100.823 14.4333 101.423 13.2797 102.722 12.4415C103.631 11.8579 103.797 11.8226 105.247 11.9009C106.265 11.9568 107.242 12.1663 108.091 12.513L109.382 13.0379V6L106.021 6.10674C102.268 6.22523 100.85 6.54838 99.056 7.69802C97.0339 8.99846 95.4817 11.2331 94.905 13.6832C94.5015 15.4018 94.7307 18.2651 95.4063 19.9347ZM8.19372 18.2856C8.15749 21.9666 8.04684 25.1433 7.95283 25.3402C7.79027 25.676 7.99983 25.7035 11.0022 25.6995H14.2288V6.04309L4.61457 6.15374L4.55484 8.94754L4.5 11.7394L6.38016 11.664L8.25737 11.5935L8.19372 18.2856ZM15.4736 15.8757V6.0519H23.951V11.7717L21.6752 11.5807V13.6988H25.1907V6.04309H31.4011V25.6917H24.7922L24.9939 25.1619C25.1036 24.8701 25.1956 23.2416 25.1956 21.5436V18.4541H21.6556L21.7193 21.714C21.7545 23.507 21.8613 25.1345 21.9563 25.3323C22.1178 25.6682 21.9005 25.6946 18.8002 25.6946H15.4697V15.8757H15.4736ZM112.63 6.51313C112.855 7.13691 112.846 24.877 112.622 25.3402C112.456 25.68 112.8 25.7035 118.464 25.7123H124.484V19.873L124.018 20.016C123.414 20.2011 119.416 20.4185 119.064 20.2833C118.874 20.2128 118.815 19.8524 118.867 19.0906L118.943 18.0007L120.317 18.1143C121.075 18.1789 121.857 18.2935 122.055 18.3718C122.387 18.503 122.418 18.3082 122.418 16.0451V13.5764L118.903 13.7576V11.2214L120.507 11.2262C122.004 11.2331 122.884 11.3565 124.03 11.7237L124.5 11.8735L124.382 6.15374L112.459 6.04309L112.63 6.51313ZM55.7423 25.0285C52.878 18.1786 47.9563 7.08178 47.5812 6.63524L47.0877 6.04671H54.0355C57.8555 6.04671 60.9842 6.1182 60.9842 6.20045C60.9842 6.28761 60.5768 7.42549 60.0833 8.73279L59.1834 11.1114L57.6029 11.1711C56.7333 11.2025 56.0224 11.2651 56.0224 11.3082C56.0224 11.505 57.9622 16.7137 58.0886 16.8586C58.1679 16.9497 59.1432 14.5525 60.2615 11.5344L62.2915 6.04671H78.3688V9.06965C78.3688 11.8732 78.3414 12.0789 78.0055 11.9251C77.8087 11.8341 76.5513 11.7234 75.2127 11.6793L72.7832 11.601V13.7573L76.2996 13.5771V18.4195L75.3831 18.2256C74.8807 18.1189 74.111 18.0601 73.6762 18.0954L72.886 18.1581L72.7597 20.5366H74.6046C75.718 20.5366 76.801 20.4133 77.3298 20.2252C77.8116 20.0549 78.2435 19.9119 78.2856 19.9119C78.3286 19.9119 78.3649 21.2153 78.3649 22.8075V25.7032H72.3415C67.4071 25.7032 66.3564 25.6571 66.5424 25.4348C66.7872 25.1381 66.9929 10.8108 66.7481 10.8108C66.6727 10.8108 65.1832 14.1608 63.4411 18.257L60.2733 25.7032H56.0224L55.7423 25.0285ZM79.1552 6.04691L79.3246 6.51401C79.5499 7.13289 79.546 24.8749 79.3178 25.3352C79.1513 25.672 79.3765 25.6994 82.6864 25.6994C86.1275 25.6994 86.2303 25.6887 86.0207 25.3009C85.9023 25.0796 85.8073 23.7723 85.8073 22.3925C85.8073 19.8886 85.8073 19.8856 86.2734 20.0188C87.143 20.2764 88.2799 21.1528 88.8331 21.9812C89.453 22.9223 89.7057 24.5664 89.3384 25.2607L89.0975 25.6994H92.6336C94.7037 25.6994 96.1207 25.6201 96.0541 25.5144C95.9914 25.4106 95.7701 24.305 95.5567 23.0564C95.0866 20.3116 94.2494 18.5607 92.9137 17.5423L92.0294 16.8627L92.5347 16.1831C94.221 13.8966 93.9526 10.0687 91.9658 8.08472C90.35 6.46994 88.509 6.05866 82.9469 6.05572L79.1552 6.04691ZM32.3649 6.90443C32.784 8.12947 32.6841 24.8394 32.2542 25.3593C31.9938 25.6756 32.4168 25.704 37.9985 25.704H44.014V19.8658L43.5479 20.0156C43.2913 20.0978 42.0311 20.2124 40.7433 20.2682L38.4049 20.3701L38.4676 19.2596L38.5312 18.1521L39.3215 18.0874C39.7563 18.0512 40.526 18.1119 41.0273 18.2187L41.9439 18.4106V13.5682L40.1744 13.6642L38.4049 13.7543L38.5312 11.3199L40.1871 11.265C41.1223 11.2327 42.316 11.3336 42.928 11.4942L44.014 11.7782V6.05151H32.0692L32.3649 6.90443ZM87.1547 11.5229C86.7434 11.3515 86.4546 11.2379 86.2577 11.2261C85.819 11.1978 85.8073 11.66 85.8073 13.0789V14.9395H86.4399C86.8658 14.9395 87.2732 14.7456 87.6796 14.3392C88.6353 13.3825 88.3866 12.035 87.1547 11.5229Z" fill="#DB0E31" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path d="M47.1473 22.4416L48.3172 19.8106C49.5815 20.7241 51.2609 21.1992 52.9214 21.1992C54.1479 21.1992 54.9215 20.7424 54.9215 20.0481C54.9027 18.1114 47.5813 19.6279 47.5247 14.7678C47.5059 12.3012 49.7702 10.4011 52.978 10.4011C54.8838 10.4011 56.7896 10.8579 58.1482 11.8993L57.0538 14.5851C55.8084 13.8177 54.2611 13.2696 52.7893 13.2696C51.7892 13.2696 51.1288 13.7264 51.1288 14.311C51.1476 16.2112 58.5256 15.1698 58.6011 19.8106C58.6011 22.3319 56.3933 24.1042 53.2233 24.1042C50.9023 24.1042 48.7701 23.5744 47.1473 22.4416Z" fill="black" />
                    <path d="M92.0376 18.8605C91.4527 19.8472 90.3582 20.5231 89.094 20.5231C87.2259 20.5231 85.7164 19.0615 85.7164 17.2527C85.7164 15.4439 87.2259 13.9822 89.094 13.9822C90.3582 13.9822 91.4527 14.6582 92.0376 15.6449L95.2643 13.9091C94.0567 11.8262 91.7357 10.4011 89.094 10.4011C85.188 10.4011 82.018 13.4706 82.018 17.2527C82.018 21.0347 85.188 24.1042 89.094 24.1042C91.7546 24.1042 94.0567 22.6974 95.2643 20.5962L92.0376 18.8605Z" fill="black" />
                    <path d="M60.2238 4.71887H64.2619V23.8484H60.2238V4.71887Z" fill="black" />
                    <path d="M96.8493 4.71887V23.8484H100.887V18.1114L105.68 23.8484H110.85L104.756 17.0335L110.398 10.6752H105.454L100.887 15.9555V4.71887H96.8493Z" fill="black" />
                    <path d="M76.2628 18.897C75.6778 19.8288 74.4702 20.5231 73.1116 20.5231C71.2435 20.5231 69.734 19.0615 69.734 17.2527C69.734 15.4439 71.2435 13.9822 73.1116 13.9822C74.4702 13.9822 75.6778 14.713 76.2628 15.6631V18.897ZM76.2628 10.6752V12.2282C75.6024 11.1502 73.9608 10.4011 72.2437 10.4011C68.6962 10.4011 65.9035 13.4341 65.9035 17.2344C65.9035 21.0347 68.6962 24.1042 72.2437 24.1042C73.9608 24.1042 75.6024 23.3551 76.2628 22.2772V23.8302H80.3009V10.6752H76.2628Z" fill="black" />
                    <path d="M22.5637 19.172C22.5637 20.5669 21.4363 21.6943 20.0414 21.6943C18.6465 21.6943 17.5191 20.5669 17.5191 19.172C17.5191 17.7771 18.6465 16.6497 20.0414 16.6497H22.5637V19.172Z" fill="#E01E5A" />
                    <path d="M23.8249 19.172C23.8249 17.7771 24.9522 16.6497 26.3471 16.6497C27.7421 16.6497 28.8694 17.7771 28.8694 19.172V25.4777C28.8694 26.8726 27.7421 28 26.3471 28C24.9522 28 23.8249 26.8726 23.8249 25.4777V19.172Z" fill="#E01E5A" />
                    <path d="M26.3471 9.04459C24.9522 9.04459 23.8249 7.9172 23.8249 6.5223C23.8249 5.12739 24.9522 4 26.3471 4C27.7421 4 28.8694 5.12739 28.8694 6.5223V9.04459H26.3471Z" fill="#36C5F0" />
                    <path d="M26.3471 10.3248C27.7421 10.3248 28.8694 11.4523 28.8694 12.8472C28.8694 14.2421 27.7421 15.3694 26.3471 15.3694H20.0223C18.6274 15.3694 17.5 14.2421 17.5 12.8472C17.5 11.4523 18.6274 10.3248 20.0223 10.3248H26.3471Z" fill="#36C5F0" />
                    <path d="M36.4554 12.8472C36.4554 11.4523 37.5828 10.3248 38.9777 10.3248C40.3726 10.3248 41.5 11.4523 41.5 12.8472C41.5 14.2421 40.3726 15.3694 38.9777 15.3694H36.4554V12.8472Z" fill="#2EB67D" />
                    <path d="M35.1943 12.8472C35.1943 14.2421 34.0669 15.3694 32.672 15.3694C31.2771 15.3694 30.1497 14.2421 30.1497 12.8472V6.5223C30.1497 5.12739 31.2771 4 32.672 4C34.0669 4 35.1943 5.12739 35.1943 6.5223V12.8472Z" fill="#2EB67D" />
                    <path d="M32.672 22.9554C34.0669 22.9554 35.1943 24.0828 35.1943 25.4777C35.1943 26.8726 34.0669 28 32.672 28C31.2771 28 30.1497 26.8726 30.1497 25.4777V22.9554H32.672Z" fill="#ECB22E" />
                    <path d="M32.672 21.6943C31.2771 21.6943 30.1497 20.5669 30.1497 19.172C30.1497 17.7771 31.2771 16.6497 32.672 16.6497H38.9969C40.3918 16.6497 41.5191 17.7771 41.5191 19.172C41.5191 20.5669 40.3918 21.6943 38.9969 21.6943H32.672Z" fill="#ECB22E" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path d="M45.5022 12.4774H36.9593V15.0123H43.0185C42.7183 18.5605 39.7617 20.0835 36.9695 20.0835C36.085 20.0874 35.2085 19.915 34.3914 19.5764C33.5742 19.2379 32.8326 18.7399 32.21 18.1116C31.5873 17.4834 31.0961 16.7373 30.7649 15.9171C30.4338 15.0969 30.2693 14.2189 30.2812 13.3344C30.2812 9.49694 33.2521 6.5424 36.9777 6.5424C39.8517 6.5424 41.5453 8.37449 41.5453 8.37449L43.3194 6.53626C43.3194 6.53626 41.0404 4 36.8849 4C31.5934 4 27.5 8.46593 27.5 13.2894C27.5 18.016 31.3505 22.6252 37.0187 22.6252C42.0045 22.6252 45.6544 19.2094 45.6544 14.1587C45.6544 13.0929 45.4995 12.4774 45.4995 12.4774H45.5022Z" fill="#4885ED" />
                    <path d="M52.501 10.6412C48.9951 10.6412 46.4827 13.3822 46.4827 16.5776C46.4827 19.8215 48.9187 22.6129 52.5419 22.6129C55.8213 22.6129 58.5077 20.1067 58.5077 16.6472C58.5077 12.6896 55.3825 10.6412 52.501 10.6412ZM52.5351 12.9926C54.2587 12.9926 55.8922 14.3866 55.8922 16.6322C55.8922 18.8293 54.2655 20.2636 52.5269 20.2636C50.6164 20.2636 49.1152 18.7338 49.1152 16.6144C49.1152 14.5401 50.6027 12.9926 52.5406 12.9926H52.5351Z" fill="#DB3236" />
                    <path d="M65.589 10.6412C62.0831 10.6412 59.5707 13.3822 59.5707 16.5776C59.5707 19.8215 62.0067 22.6129 65.6299 22.6129C68.9093 22.6129 71.5956 20.1067 71.5956 16.6472C71.5956 12.6896 68.4705 10.6412 65.589 10.6412ZM65.6231 12.9926C67.3467 12.9926 68.9802 14.3866 68.9802 16.6322C68.9802 18.8293 67.3535 20.2636 65.6149 20.2636C63.7044 20.2636 62.2032 18.7338 62.2032 16.6144C62.2032 14.5401 63.6907 12.9926 65.6286 12.9926H65.6231Z" fill="#F4C20D" />
                    <path d="M78.4259 10.6481C75.208 10.6481 72.6792 13.4661 72.6792 16.6295C72.6792 20.2322 75.6112 22.6218 78.3699 22.6218C80.0758 22.6218 80.9833 21.9442 81.6452 21.167V22.3475C81.6452 24.4129 80.391 25.65 78.4982 25.65C76.6695 25.65 75.7525 24.2901 75.4277 23.5191L73.1268 24.4743C73.9429 26.2007 75.586 28 78.5173 28C81.7243 28 84.1548 25.985 84.1548 21.7586V11.0076H81.6547V12.0216C80.8837 11.1891 79.8274 10.6481 78.4272 10.6481H78.4259ZM78.6579 12.9953C80.2355 12.9953 81.8553 14.3422 81.8553 16.6424C81.8553 18.9808 80.2382 20.2691 78.6231 20.2691C76.9077 20.2691 75.3117 18.8771 75.3117 16.6643C75.3117 14.3661 76.9698 12.9953 78.6579 12.9953Z" fill="#4885ED" />
                    <path d="M95.3288 10.6337C92.2938 10.6337 89.7453 13.0492 89.7453 16.611C89.7453 20.3817 92.5858 22.6177 95.6134 22.6177C98.1462 22.6177 99.7074 21.2325 100.629 19.9907L98.5591 18.6137C98.0221 19.4462 97.1241 20.2616 95.6264 20.2616C93.9437 20.2616 93.1699 19.3404 92.6902 18.4465L100.717 15.1167L100.307 14.141C99.5321 12.2304 97.7225 10.6337 95.3288 10.6337ZM95.4333 12.9359C96.527 12.9359 97.3138 13.5173 97.6481 14.2147L92.2877 16.4548C92.0557 14.7203 93.7001 12.9359 95.4264 12.9359H95.4333Z" fill="#DB3236" />
                    <path d="M85.9125 22.2629H88.5491V4.61957H85.9125V22.2629Z" fill="#3CBA54" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path d="M34.7015 5.16481C33.5759 4.38908 32.107 4.00027 30.2949 4.00027H23.2795C22.724 4.00027 22.4171 4.27878 22.3588 4.83525L19.5089 22.7682C19.4793 22.9443 19.5233 23.1054 19.6404 23.2518C19.7569 23.3985 19.9034 23.4715 20.0788 23.4715H23.4111C23.9956 23.4715 24.3168 23.1937 24.3758 22.6365L25.1649 17.8018C25.1937 17.5675 25.2965 17.377 25.4719 17.2303C25.6472 17.0839 25.8665 16.9881 26.1296 16.9443C26.3927 16.9007 26.6407 16.8787 26.875 16.8787C27.1086 16.8787 27.3861 16.8936 27.7082 16.9228C28.0294 16.9519 28.2342 16.9663 28.322 16.9663C30.8357 16.9663 32.8088 16.2563 34.2413 14.8346C35.6732 13.4137 36.3899 11.4433 36.3899 8.92269C36.3899 7.19388 35.8266 5.94135 34.7015 5.16441V5.16481ZM31.0845 10.5495C30.9378 11.5753 30.5583 12.2489 29.9445 12.5713C29.3305 12.8942 28.4536 13.0549 27.3138 13.0549L25.8668 13.0987L26.6123 8.3955C26.6705 8.07347 26.8604 7.91225 27.1822 7.91225H28.0155C29.1842 7.91225 30.0324 8.08113 30.5586 8.41754C31.0844 8.75475 31.2599 9.46559 31.0845 10.5495Z" fill="#003087" />
                    <path d="M108.736 4H105.492C105.169 4 104.979 4.16122 104.922 4.48379L102.071 22.7687L102.028 22.8566C102.028 23.0038 102.086 23.1423 102.203 23.2743C102.319 23.4059 102.466 23.4719 102.641 23.4719H105.536C106.09 23.4719 106.397 23.1941 106.457 22.6369L109.306 4.65965V4.61599C109.306 4.20556 109.116 4.00054 108.736 4.00054V4Z" fill="#009CDE" />
                    <path d="M69.5375 11.0775C69.5375 10.9313 69.4788 10.7919 69.3626 10.6604C69.2454 10.5286 69.1138 10.4622 68.968 10.4622H65.5918C65.2697 10.4622 65.0066 10.6094 64.8023 10.9017L60.1548 17.7587L58.2255 11.1656C58.0786 10.6972 57.7575 10.4622 57.261 10.4622H53.972C53.8255 10.4622 53.694 10.5283 53.5778 10.6604C53.4606 10.7919 53.4024 10.9316 53.4024 11.0775C53.4024 11.1365 53.6874 12.0006 54.2573 13.6709C54.8272 15.3416 55.441 17.1438 56.0988 19.0779C56.7565 21.0116 57.0998 22.0377 57.1291 22.1539C54.732 25.4363 53.534 27.1944 53.534 27.4285C53.534 27.8098 53.7236 28 54.104 28H57.4801C57.8015 28 58.0644 27.8538 58.2695 27.5607L69.4504 11.385C69.5085 11.327 69.5375 11.2249 69.5375 11.0774V11.0775Z" fill="#003087" />
                    <path d="M100.976 10.4622H97.6437C97.234 10.4622 96.9865 10.9459 96.8987 11.913C96.1377 10.7412 94.7502 10.1545 92.7328 10.1545C90.6283 10.1545 88.8376 10.9459 87.3618 12.5282C85.8854 14.1106 85.1476 15.9719 85.1476 18.1107C85.1476 19.8399 85.6518 21.217 86.66 22.2422C87.6685 23.2685 89.0203 23.7806 90.7163 23.7806C91.5639 23.7806 92.4261 23.6045 93.303 23.2532C94.1799 22.9016 94.8663 22.433 95.3641 21.8467C95.3641 21.8761 95.3343 22.0075 95.2765 22.2418C95.2174 22.4766 95.1886 22.653 95.1886 22.7693C95.1886 23.2387 95.3781 23.4724 95.7587 23.4724H98.7844C99.3391 23.4724 99.661 23.1946 99.7484 22.6375L101.546 11.1654C101.575 10.9894 101.532 10.8286 101.415 10.6819C101.297 10.5357 101.151 10.4622 100.976 10.4622ZM95.2542 19.1215C94.5088 19.8541 93.6098 20.2202 92.5576 20.2202C91.7095 20.2202 91.0232 19.9862 90.4968 19.5171C89.9703 19.0493 89.7073 18.4045 89.7073 17.5831C89.7073 16.4997 90.0727 15.5832 90.8038 14.8361C91.5336 14.0888 92.4406 13.7153 93.5222 13.7153C94.34 13.7153 95.0197 13.957 95.561 14.4403C96.1013 14.9239 96.3725 15.5906 96.3725 16.4406C96.3722 17.4954 95.9995 18.3893 95.2542 19.1215Z" fill="#009CDE" />
                    <path d="M51.166 10.4622H47.8336C47.4237 10.4622 47.1758 10.9459 47.088 11.913C46.2987 10.7412 44.9102 10.1545 42.9225 10.1545C40.8178 10.1545 39.0272 10.9459 37.5512 12.5282C36.0748 14.1106 35.3371 15.9719 35.3371 18.1107C35.3371 19.8399 35.8414 21.217 36.8499 22.2422C37.8584 23.2685 39.21 23.7806 40.9056 23.7806C41.7237 23.7806 42.5719 23.6045 43.4487 23.2532C44.3256 22.9016 45.0272 22.433 45.5533 21.8467C45.4361 22.198 45.3779 22.5058 45.3779 22.7693C45.3779 23.2387 45.5678 23.4724 45.9479 23.4724H48.9733C49.5282 23.4724 49.8502 23.1946 49.9379 22.6375L51.7356 11.1654C51.7644 10.9894 51.7207 10.8286 51.6041 10.6819C51.4871 10.5357 51.3411 10.4622 51.166 10.4622ZM45.444 19.1433C44.6984 19.8621 43.7845 20.2202 42.7036 20.2202C41.8554 20.2202 41.1758 19.9862 40.6647 19.5171C40.1528 19.0493 39.8972 18.4045 39.8972 17.5831C39.8972 16.4997 40.2625 15.5832 40.9935 14.8361C41.7238 14.0888 42.6301 13.7152 43.712 13.7152C44.5301 13.7152 45.2097 13.957 45.751 14.4403C46.2914 14.9239 46.5621 15.5906 46.5621 16.4406C46.562 17.5248 46.1894 18.4261 45.444 19.1433Z" fill="#003087" />
                    <path d="M84.5117 5.16481C83.3862 4.38908 81.9177 4.00027 80.1052 4.00027H73.1335C72.5487 4.00027 72.2269 4.27878 72.1689 4.83525L69.3188 22.7682C69.2892 22.9443 69.3332 23.1054 69.4504 23.2518C69.5664 23.3985 69.7132 23.4715 69.8887 23.4715H73.4839C73.8347 23.4715 74.0684 23.2813 74.1857 22.9002L74.9749 17.8018C75.004 17.5675 75.1062 17.377 75.2819 17.2303C75.4574 17.0839 75.6764 16.9881 75.9397 16.9443C76.2025 16.9007 76.4506 16.8787 76.685 16.8787C76.9187 16.8787 77.1962 16.8936 77.5179 16.9228C77.8393 16.9519 78.0446 16.9663 78.1318 16.9663C80.646 16.9663 82.6186 16.2563 84.0512 14.8346C85.4836 13.4137 86.1997 11.4433 86.1997 8.92269C86.1998 7.19388 85.6368 5.94121 84.5117 5.16441V5.16481ZM80.0176 12.3953C79.3744 12.8348 78.4096 13.0545 77.1238 13.0545L75.7205 13.0985L76.4659 8.39523C76.5238 8.07333 76.7138 7.91184 77.0357 7.91184H77.8247C78.4679 7.91184 78.9793 7.94127 79.3599 7.99971C79.7392 8.05856 80.1052 8.2414 80.4559 8.54893C80.8069 8.85672 80.9821 9.30384 80.9821 9.8896C80.9821 11.1208 80.6602 11.9555 80.0176 12.3953Z" fill="#009CDE" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path d="M53.8494 12.5683H57.0209V22.5518H53.8494V12.5683Z" fill="#E60023" />
                    <path d="M57.6831 12.5682H60.7378V13.9332H60.7961C61.5355 12.8607 62.4889 12.2758 63.8704 12.2758C66.0495 12.2758 67.3336 13.8357 67.3336 16.0586V22.5518H64.1622V16.7021C64.1622 15.6491 63.6369 14.9276 62.6057 14.9276C61.5551 14.9276 60.8545 15.8051 60.8545 17.0335V22.5518H57.6831V12.5682Z" fill="#E60023" />
                    <path d="M57.3375 9.89724C57.3375 8.84422 56.4857 7.99069 55.4351 7.99069C54.3845 7.99069 53.5327 8.84422 53.5327 9.89724C53.5327 10.9502 54.3845 11.8037 55.4351 11.8037C56.4857 11.8037 57.3375 10.9502 57.3375 9.89724Z" fill="#E60023" />
                    <path d="M89.6389 12.4241C89.5484 12.4159 89.4446 12.4122 89.3232 12.4122C88.1169 12.4122 87.2998 12.9387 86.5993 14.1282H86.541V12.5683H83.5057V22.5517H86.6771V18.067C86.6771 15.989 87.8254 15.0261 89.6389 15.1941V12.4241Z" fill="#E60023" />
                    <path d="M105.202 16.2535C103.938 16.0196 102.809 15.9221 102.809 15.2202C102.809 14.5961 103.412 14.3037 104.191 14.3037C105.066 14.3037 105.669 14.5766 105.786 15.4736H108.705C108.549 13.5042 107.031 12.2757 104.21 12.2757C101.856 12.2757 99.9101 13.3677 99.9101 15.4736C99.9101 17.8134 101.759 18.2814 103.49 18.574C104.813 18.808 106.02 18.9055 106.02 19.8024C106.02 20.4459 105.416 20.7969 104.463 20.7969C103.507 20.7969 102.874 20.3913 102.68 19.5685H99.6579C99.8804 21.6208 101.678 22.8638 104.482 22.8638C107.09 22.8638 109.016 21.7328 109.016 19.549C109.016 16.9945 106.953 16.546 105.202 16.2535Z" fill="#E60023" />
                    <path d="M94.5586 14.5376C95.5898 14.5376 96.3291 15.2981 96.4459 16.4876H92.5156C92.7296 15.2981 93.3523 14.5376 94.5586 14.5376ZM94.7337 20.5628C93.43 20.5628 92.6907 19.7244 92.4961 18.3789H99.6562C99.6757 16.3511 99.0921 14.6156 97.9051 13.5237C97.049 12.7438 95.9205 12.2758 94.5001 12.2758C91.4649 12.2758 89.3831 14.5571 89.3831 17.5406C89.3831 20.5628 91.4066 22.8443 94.6947 22.8443C95.9593 22.8443 96.9712 22.5128 97.8078 21.9278C98.6834 21.3234 99.2671 20.4654 99.481 19.5685H96.3875C96.115 20.1924 95.5703 20.5628 94.7337 20.5628Z" fill="#E60023" />
                    <path d="M114.601 20.1976C114.454 20.2034 114.257 20.212 114.076 20.212C113.395 20.212 112.967 20.0169 112.967 19.2369V14.5571H114.601V12.5682H112.967V9.40938H109.873V12.5682H108.9V14.5571H109.873V19.9194C109.873 22.0644 111.196 22.6688 113.045 22.6688C113.75 22.6688 114.283 22.6159 114.601 22.5536V20.1976Z" fill="#E60023" />
                    <path d="M72.9973 20.2021C72.8707 20.207 72.7247 20.212 72.5883 20.212C71.9074 20.212 71.4792 20.0169 71.4792 19.2369V14.5571H72.9973V12.5682H71.4792V9.40938H68.3857V12.5682H67.3541V14.5571H68.3857V19.9194C68.3857 22.0644 69.7087 22.6688 71.5571 22.6688C72.1825 22.6688 72.6722 22.6271 72.9973 22.5742V20.2021Z" fill="#E60023" />
                    <path d="M79.9052 16.4876C79.7885 15.2981 79.0491 14.5376 78.0179 14.5376C76.8116 14.5376 76.189 15.2981 75.9749 16.4876H79.9052ZM72.8425 17.5405C72.8425 14.5571 74.9243 12.2758 77.9596 12.2758C79.3798 12.2758 80.5084 12.7438 81.3645 13.5237C82.5513 14.6157 83.135 16.3511 83.1155 18.379H75.9556C76.15 19.7244 76.8894 20.5629 78.1931 20.5629C79.0296 20.5629 79.5745 20.1924 79.8467 19.5685H82.9404C82.7264 20.4654 82.1427 21.3233 81.2671 21.9279C80.4306 22.5128 79.4188 22.8443 78.1541 22.8443C74.8659 22.8443 72.8425 20.5629 72.8425 17.5405Z" fill="#E60023" />
                    <path d="M48.3417 15.1617C49.5869 15.1617 50.2874 14.4207 50.2874 13.3091C50.2874 12.1978 49.5674 11.5153 48.3417 11.5153H45.9095V15.1617H48.3417ZM42.6987 8.60992H48.206C49.8987 8.60992 51.1439 9.07786 52 9.89686C52.8951 10.7352 53.401 11.9248 53.401 13.3287C53.401 16 51.5526 17.8915 48.6924 17.8915H45.9095V22.5518H42.6987V8.60992Z" fill="#E60023" />
                    <path d="M38.3464 16C38.3464 22.6274 32.9855 28 26.3725 28C19.7596 28 14.3987 22.6274 14.3987 16C14.3987 9.37252 19.7596 4 26.3725 4C32.9855 4 38.3464 9.37252 38.3464 16Z" fill="white" />
                    <path d="M26.3725 4C19.7596 4 14.3987 9.37252 14.3987 16C14.3987 21.0838 17.5534 25.4283 22.0076 27.1767C21.9029 26.2273 21.8083 24.7671 22.0491 23.7306C22.2667 22.7941 23.4531 17.7659 23.4531 17.7659C23.4531 17.7659 23.095 17.047 23.095 15.9842C23.095 14.3156 24.06 13.0699 25.2616 13.0699C26.2832 13.0699 26.7766 13.8386 26.7766 14.7603C26.7766 15.7899 26.1225 17.3292 25.785 18.7557C25.5029 19.9501 26.3826 20.9241 27.5581 20.9241C29.6862 20.9241 31.3222 18.6753 31.3222 15.4291C31.3222 12.5558 29.2621 10.547 26.3206 10.547C22.9136 10.547 20.9138 13.108 20.9138 15.7546C20.9138 16.786 21.3103 17.892 21.805 18.4932C21.9028 18.612 21.9172 18.7161 21.888 18.8374C21.7971 19.2164 21.5951 20.0315 21.5555 20.1983C21.5032 20.4179 21.3819 20.4646 21.155 20.3587C19.6595 19.6611 18.7245 17.4699 18.7245 15.7099C18.7245 11.9245 21.4689 8.44813 26.6361 8.44813C30.7899 8.44813 34.0178 11.4145 34.0178 15.3788C34.0178 19.5144 31.4159 22.8428 27.8045 22.8428C26.5911 22.8428 25.4505 22.2111 25.06 21.4649C25.06 21.4649 24.4596 23.756 24.314 24.3175C24.0437 25.3598 23.314 26.6663 22.8259 27.4634C23.9462 27.811 25.1382 28 26.3725 28C32.9855 28 38.3464 22.6274 38.3464 16C38.3464 9.37252 32.9855 4 26.3725 4Z" fill="#E60023" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="32" viewBox="0 0 129 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.5612 13.2112C53.4242 13.2112 52.8936 14.1208 52.5904 14.6513C52.4388 14.9545 52.4388 15.2577 52.2873 15.2577C52.1357 15.2577 52.2115 15.0303 52.1357 14.5755C51.9841 13.8934 51.4535 13.2112 50.3165 13.2112C49.1038 13.2112 48.5732 14.1966 48.3458 14.8029C48.1942 15.1819 48.1942 15.2577 48.0426 15.2577C47.891 15.2577 48.0426 14.9545 48.1184 14.5755C48.27 13.8934 48.1942 13.3628 48.1942 13.3628H46.2993V20.4877H48.8764C48.8764 20.4877 48.8764 17.5316 48.8764 16.9252C48.8764 16.2431 49.1796 15.3335 49.6344 15.3335C50.2407 15.3335 50.3165 15.7883 50.3165 16.6221V20.4877H52.8936C52.8936 20.4877 52.8936 17.4558 52.8936 16.9252C52.8936 16.3189 53.121 15.3335 53.7274 15.3335C54.3338 15.3335 54.4096 15.9399 54.4096 16.6221V20.4877H56.9866C56.9866 20.4877 56.9866 17.6832 56.9866 16.3189C56.9109 14.4997 56.2287 13.2112 54.5612 13.2112Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M98.5232 13.2112C97.3863 13.2112 96.8557 14.1208 96.5525 14.6513C96.4009 14.9545 96.4009 15.2577 96.2493 15.2577C96.0977 15.2577 96.1735 14.9545 96.0977 14.5755C95.8703 13.8934 95.4156 13.2112 94.2786 13.2112C93.0659 13.2112 92.5353 14.1966 92.3079 14.8029C92.1563 15.1819 92.1563 15.2577 92.0047 15.2577C91.8531 15.2577 92.0047 14.9545 92.0805 14.5755C92.2321 13.8934 92.1563 13.3628 92.1563 13.3628H90.2614V20.4877H92.8385C92.8385 20.4877 92.8385 17.5316 92.8385 16.9252C92.8385 16.2431 93.1417 15.3335 93.5964 15.3335C94.2028 15.3335 94.2786 15.7883 94.2786 16.6221V20.4877H96.8557C96.8557 20.4877 96.8557 17.4558 96.8557 16.9252C96.8557 16.3189 97.0831 15.3335 97.6895 15.3335C98.2958 15.3335 98.3716 15.9399 98.3716 16.6221V20.4877H100.949C100.949 20.4877 100.949 17.6832 100.949 16.3189C100.873 14.4997 100.267 13.2112 98.5232 13.2112Z" fill="#101828" />
                    <path d="M61.3071 13.2112C59.3363 13.2112 57.8962 13.9692 57.8962 13.9692V16.0915C57.8962 16.0915 59.4879 15.1819 60.7765 15.1819C61.7618 15.1819 61.9134 15.7125 61.8376 16.1673C61.8376 16.1673 61.5344 16.0915 60.6249 16.0915C58.5026 16.0915 57.4414 17.0768 57.4414 18.5928C57.4414 20.0329 58.6542 20.6393 59.6395 20.6393C61.0797 20.6393 61.7618 19.6539 61.9892 19.1991C62.1408 18.896 62.1408 18.6686 62.2924 18.6686C62.444 18.6686 62.3682 18.8202 62.3682 19.1233C62.3682 19.6539 62.3682 20.1087 62.444 20.4877H64.4147V17.001C64.4905 14.8029 63.6567 13.2112 61.3071 13.2112ZM60.7007 18.896C60.0943 19.0475 59.7911 18.8202 59.7911 18.4412C59.7911 17.9106 60.3975 17.6832 61.2313 17.6832H61.9134C61.9134 17.9106 61.3829 18.7444 60.7007 18.896Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7351 11.2405H71.3122V20.5635H68.7351V11.2405Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.1925 17.001C74.1925 16.3947 74.7989 15.7883 75.86 15.7883C77.0728 15.7883 77.9823 16.3947 78.2097 16.4705V13.9692C78.2097 13.9692 77.4517 13.2112 75.5568 13.2112C73.5861 13.2112 71.9944 14.3482 71.9944 16.8494C71.9944 19.3507 73.5103 20.7151 75.5568 20.7151C77.2244 20.7151 78.2097 19.8055 78.2097 19.8055V17.4558C77.9065 17.6074 76.997 18.2138 75.86 18.2138C74.6473 18.2138 74.1925 17.6832 74.1925 17.001Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.4397 13.2112C81.9238 13.2112 81.3932 14.6513 81.2416 14.8787C81.09 15.1061 81.09 15.2577 80.9384 15.2577C80.7868 15.2577 80.8626 14.9545 80.9384 14.7271C81.09 14.3482 81.3174 13.4386 81.3174 12.2258C81.3174 11.3921 81.2416 11.1647 81.2416 11.1647H78.9677V20.4877H81.5448C81.5448 20.4877 81.5448 17.5316 81.5448 16.9252C81.5448 16.3189 81.7722 15.3335 82.4543 15.3335C82.9849 15.3335 83.1365 15.7125 83.1365 16.5463V20.4877H85.7136C85.7136 20.4877 85.7136 18.2896 85.7136 16.6978C85.8652 14.9545 85.562 13.2112 83.4397 13.2112Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6989 13.4386V20.5635H89.276V13.4386C89.276 13.4386 88.8213 13.666 87.9875 13.666C87.1537 13.666 86.6989 13.4386 86.6989 13.4386Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9875 13.287C88.8666 13.287 89.5792 12.8119 89.5792 12.2258C89.5792 11.6398 88.8666 11.1647 87.9875 11.1647C87.1084 11.1647 86.3958 11.6398 86.3958 12.2258C86.3958 12.8119 87.1084 13.287 87.9875 13.287Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M65.3243 20.5635H67.9014V13.4386C67.9014 13.4386 67.4466 13.666 66.6128 13.666C65.7791 13.666 65.3243 13.4386 65.3243 13.4386V20.5635Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.6128 13.287C67.4919 13.287 68.2046 12.8119 68.2046 12.2258C68.2046 11.6398 67.4919 11.1647 66.6128 11.1647C65.7337 11.1647 65.0211 11.6398 65.0211 12.2258C65.0211 12.8119 65.7337 13.287 66.6128 13.287Z" fill="#101828" />
                    <path d="M106.027 13.2112C104.663 13.2112 104.056 14.1966 103.829 14.8029C103.677 15.1819 103.677 15.2577 103.526 15.2577C103.374 15.2577 103.526 14.9545 103.602 14.5755C103.753 13.8934 103.677 13.3628 103.677 13.3628H101.782V22.4584H104.36C104.36 22.4584 104.36 20.9425 104.36 19.5781C104.663 20.1087 105.269 20.6393 106.103 20.6393C107.998 20.6393 108.907 19.0475 108.907 16.9252C108.907 14.5755 107.77 13.2112 106.027 13.2112ZM105.345 19.0475C104.739 19.0475 104.284 18.2896 104.284 17.2284C104.284 16.2431 104.739 15.4093 105.269 15.4093C106.027 15.4093 106.33 16.0915 106.33 17.2284C106.33 18.3654 106.027 19.0475 105.345 19.0475Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9763 15.4093H37.5069C37.5827 15.1819 37.5827 14.8787 37.5069 14.4997C37.3553 13.9692 37.2037 13.5902 36.9005 13.666C36.5973 13.7418 36.5215 14.1208 36.6731 14.7271C36.7489 14.9545 36.9005 15.2577 36.9763 15.4093Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.1718 15.8641C34.3992 15.9399 34.5508 16.0157 34.6266 15.9399C34.6266 15.9399 34.6266 15.8641 34.6266 15.7125C34.475 15.4851 34.2476 15.3335 34.0203 15.1819C33.4897 14.9545 32.8833 15.0303 32.4285 15.4093C32.2769 15.5609 32.1253 15.7125 32.1253 15.7883C32.1253 15.7883 32.1253 15.8641 32.2011 15.8641C32.3527 15.8641 32.8075 15.6367 33.3381 15.6367C33.6413 15.6367 33.9445 15.7125 34.1718 15.8641Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.7171 16.0915C33.4139 16.1673 33.2623 16.2431 33.1107 16.3189C33.0349 16.3947 32.9591 16.4705 32.9591 16.5463V16.6221H33.0349C33.1107 16.6221 33.2623 16.5463 33.2623 16.5463C33.7171 16.3947 33.9445 16.3947 34.2476 16.4705H34.475V16.3947C34.3992 16.2431 34.0961 16.0915 33.7171 16.0915Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.0668 17.1526C36.2942 17.2284 36.5215 17.2284 36.5973 17.0768C36.6731 16.9252 36.5973 16.6978 36.37 16.6221C36.1426 16.5463 35.9152 16.5463 35.8394 16.6978C35.7636 16.7736 35.8394 17.001 36.0668 17.1526Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4311 15.9399C37.2795 15.9399 37.1279 16.0915 37.1279 16.3947C37.1279 16.6221 37.2795 16.8494 37.4311 16.8494C37.5827 16.8494 37.7343 16.6978 37.7343 16.3947C37.7343 16.1673 37.5827 15.9399 37.4311 15.9399Z" fill="#101828" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.91 20.1845C25.8342 20.1087 25.8342 20.1845 25.7584 20.1845C25.6826 20.1845 25.6826 20.1845 25.6068 20.1845C25.4552 20.1845 25.3794 20.1087 25.3036 20.0329C25.2278 19.8813 25.2278 19.7297 25.3036 19.5023C25.3036 19.5023 25.3036 19.4265 25.3794 19.4265C25.531 19.1233 25.7584 18.5928 25.4552 18.138C25.2278 17.759 24.9247 17.5316 24.5457 17.4558C24.1667 17.38 23.7877 17.5316 23.5603 17.8348C23.1813 18.2138 23.1055 18.8202 23.1813 19.0475C23.1813 19.1233 23.2571 19.1233 23.2571 19.1233C23.3329 19.1233 23.4087 19.0475 23.4845 18.896C23.4845 18.896 23.4845 18.896 23.4845 18.8202C23.4845 18.7444 23.5603 18.5928 23.6361 18.4412C23.7119 18.2896 23.8635 18.2138 24.0909 18.138C24.2425 18.0622 24.4699 18.138 24.6215 18.2138C24.8489 18.3654 25.0005 18.7444 24.8489 19.0475C24.7731 19.1991 24.6973 19.5023 24.6973 19.7297C24.7731 20.2603 25.0762 20.4119 25.3036 20.4877C25.6068 20.4877 25.7584 20.3361 25.8342 20.2603C25.9858 20.1845 25.9858 20.1845 25.91 20.1845Z" fill="#101828" />
                    <path d="M41.6757 19.1991C41.6757 19.1991 41.5999 18.896 41.5241 18.5928C41.4483 18.2896 41.3725 18.0622 41.3725 18.0622C41.7515 17.5316 41.7515 17.001 41.6757 16.6978C41.5999 16.3189 41.4483 16.0157 41.1451 15.7125C40.842 15.4093 40.2356 15.1061 39.4018 14.8787C39.326 14.8787 39.0228 14.7271 38.947 14.7271C38.947 14.7271 38.947 13.666 38.8712 13.2112C38.8712 12.908 38.7954 12.3774 38.6439 11.9227C38.4923 11.2405 38.1133 10.7099 37.7343 10.3309C38.8712 9.19398 39.5534 7.90543 39.5534 6.84428C39.5534 4.79777 36.9763 4.1156 33.8687 5.40414L33.1865 5.70733L31.9737 4.49458C28.4113 1.38692 17.1176 13.8176 20.7558 16.9252L21.5138 17.6074C21.2864 18.138 21.2106 18.7444 21.2864 19.4265C21.3622 20.2603 21.817 21.0941 22.4992 21.7004C23.1813 22.3068 24.0151 22.6858 24.8489 22.6858C26.2132 25.945 29.4725 27.9158 33.1865 27.9916C37.2037 28.1431 40.6146 26.2482 41.9789 22.8374C42.0547 22.61 42.4337 21.5488 42.4337 20.5635C42.5853 19.6539 42.0547 19.1991 41.6757 19.1991ZM25.2278 21.7762C25.0762 21.7762 25.0004 21.7762 24.8489 21.7762C23.6361 21.7762 22.3476 20.6393 22.196 19.3507C22.0444 17.9106 22.8023 16.8494 24.0909 16.5463C24.2425 16.5463 24.4699 16.4705 24.6215 16.4705C25.3794 16.5463 26.4406 17.0768 26.668 18.6686C26.8954 20.1087 26.5922 21.5488 25.2278 21.7762ZM23.9393 15.7125C23.1055 15.8641 22.4234 16.3189 21.9686 16.9252C21.7412 16.6978 21.2106 16.3189 21.1348 16.0915C20.4526 14.8029 21.8928 12.2258 22.8781 10.7857C25.3794 7.22326 29.3209 4.49458 31.14 5.02516C31.4432 5.10096 32.4285 6.23791 32.4285 6.23791C32.4285 6.23791 30.6094 7.22326 28.9419 8.6634C26.668 10.4067 24.9247 12.9838 23.9393 15.7125ZM36.6731 21.2456C36.6731 21.1699 36.6731 21.0941 36.6731 21.0941C36.6731 21.0941 34.7782 21.3972 32.9591 20.7151C33.1865 20.1087 33.6413 20.3361 34.475 20.3361C35.9152 20.4119 37.1279 20.1845 38.1133 19.9571C38.947 19.7297 40.0082 19.2749 40.842 18.5928C41.1451 19.1991 41.2209 19.8813 41.2209 19.8813C41.2209 19.8813 41.4483 19.8055 41.5999 19.9571C41.7515 20.0329 41.9031 20.2603 41.8273 20.8667C41.6757 21.9278 41.2209 22.7616 40.463 23.5953C40.0082 24.1259 39.4776 24.5049 38.7954 24.8081C38.4923 24.9597 38.1133 25.1113 37.7343 25.2629C34.854 26.1724 31.9737 25.1871 31.0642 22.989C30.9884 22.8374 30.9126 22.6858 30.9126 22.4584C30.5336 21.0183 30.8368 19.2749 31.8979 18.2138C31.9737 18.138 32.0495 18.0622 32.0495 17.9864C32.0495 17.9106 31.9737 17.8348 31.9737 17.759C31.5948 17.2284 30.3062 16.3189 30.6094 14.4997C30.761 13.2112 31.8979 12.3016 32.9591 12.3774H33.1865C33.6413 12.3774 34.0203 12.4532 34.3992 12.4532C35.0056 12.4532 35.612 12.3774 36.2184 11.8469C36.4457 11.6953 36.5973 11.4679 36.9005 11.4679H37.2037C37.3553 11.4679 37.5069 11.5437 37.6585 11.6195C38.1891 11.9985 38.2649 12.8322 38.2649 13.4386C38.2649 13.8176 38.3407 14.6513 38.3407 14.8787C38.3407 15.4093 38.4923 15.5609 38.7954 15.6367C38.947 15.7125 39.0986 15.7125 39.326 15.7883C40.0082 16.0157 40.463 16.1673 40.6904 16.4705C40.842 16.6221 40.9178 16.7736 40.9178 17.001C40.9935 17.6074 40.463 18.3654 39.0228 19.0475C37.4311 19.8055 35.4604 19.9571 34.1718 19.8055C34.096 19.8055 33.7171 19.7297 33.7171 19.7297C32.6559 19.5781 32.0495 20.9425 32.6559 21.9278C33.0349 22.5342 34.1718 22.9132 35.3088 22.9132C37.8859 22.9132 39.8566 21.7762 40.6146 20.8667C40.6146 20.8667 40.6146 20.8667 40.6904 20.7909C40.6904 20.7151 40.6904 20.7151 40.6146 20.7151C40.0082 21.0941 37.3553 22.7616 34.475 22.3068C34.475 22.3068 34.096 22.231 33.7929 22.1552C33.5655 22.0794 33.0349 21.7762 32.9591 21.2456C35.1572 21.9278 36.6731 21.2456 36.6731 21.2456ZM28.5629 10.7857C29.4725 9.72455 30.5336 8.89079 31.519 8.36021C31.519 8.36021 31.5948 8.36021 31.5948 8.43601C31.519 8.5876 31.3674 8.89079 31.2916 9.11818C31.2916 9.11818 31.2916 9.19398 31.3674 9.19398C31.9737 8.81499 33.0349 8.36021 33.9445 8.28442C34.0203 8.28442 34.0203 8.36021 33.9445 8.36021C33.7929 8.43601 33.6413 8.5876 33.5655 8.7392V8.81499C34.2476 8.81499 35.1572 9.04238 35.7636 9.42137C35.8394 9.42137 35.7636 9.49716 35.7636 9.49716C34.854 9.26977 33.3381 9.11818 31.8222 9.49716C30.382 9.80035 29.3209 10.3309 28.5629 10.7857C28.5629 10.9373 28.4871 10.8615 28.5629 10.7857Z" fill="#101828" />
                </svg>
            </div>
        </div>
    );
};

export default Brand;