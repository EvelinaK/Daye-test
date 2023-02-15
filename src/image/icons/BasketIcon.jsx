
import SvgIcon from "@mui/material/SvgIcon";

const BasketIcon = ({ style = {}, ...props }) => (
    <SvgIcon
        viewBox="0 0 1024 1024"
        style={{ width: "24px", height: "24px", ...style }}
        {...props}
    >
        <path d="M952.32 419.84H756.736L564.224 210.944l-4.096-4.096c-29.696-26.624-73.728-24.576-101.376 4.096L267.264 419.84H71.68c-11.264 0-20.48 9.216-20.48 20.48s9.216 20.48 20.48 20.48h55.296l89.088 355.328C225.28 847.872 253.952 870.4 286.72 870.4h452.608c32.768 0 61.44-22.528 69.632-54.272L897.024 460.8H952.32c11.264 0 20.48-9.216 20.48-20.48s-9.216-20.48-20.48-20.48zM488.448 239.616c12.288-13.312 30.72-13.312 43.008-3.072L700.416 419.84H323.584l164.864-180.224z m281.6 566.272c-4.096 14.336-16.384 23.552-30.72 23.552H286.72c-14.336 0-26.624-10.24-30.72-23.552L169.984 460.8h684.032l-83.968 345.088zM645.12 645.12c0 11.264-9.216 20.48-20.48 20.48H399.36c-11.264 0-20.48-9.216-20.48-20.48s9.216-20.48 20.48-20.48h225.28c11.264 0 20.48 9.216 20.48 20.48z" />
    </SvgIcon>
);
export default BasketIcon;