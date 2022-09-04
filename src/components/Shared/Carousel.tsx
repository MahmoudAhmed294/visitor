import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "style/carousel.css";
import Slider from "react-slick";
import C1 from "assets/images/C1.jpg";
import C2 from "assets/images/C2.jpg";
import C3 from "assets/images/C3.jpg";
import C4 from "assets/images/C4.jpg";
import C5 from "assets/images/C5.jpg";
import {Box, Typography} from "@mui/material";
import Image from "components/Shared/Image";
import { useTranslation } from "react-i18next";


const Carousel = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    centerPadding: "20px 0 0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const imgStyle = {
    width: {xs:"97% !important" ,sm:"95% !important" , md:"80% !important" , lg:"90% !important"},

    "& img": {
      width: "100% ",
    },
  };
  return (
    <Box sx={{mt:2}}>
      <Box sx={{my:2 , px:5.5}}>

      <Typography variant="h1" >
      {t('ourAdds')}
      </Typography>
      </Box>
    <Slider {...settings}>
      <Box sx={imgStyle}>
        <Image alt="" src={C1} />
      </Box>
      <Box sx={imgStyle}>
        <Image alt="" src={C2} />
      </Box>
      <Box sx={imgStyle}>
        <Image alt="" src={C3} />
      </Box>
      <Box sx={imgStyle}>
        <Image alt="" src={C4} />
      </Box>
      <Box sx={imgStyle}>
        <Image alt="" src={C5} />
      </Box>
    </Slider>
    </Box>

  );
};

export default Carousel;
