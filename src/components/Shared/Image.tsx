import { CircularProgress, Stack } from "@mui/material";
import { Suspense } from "react";

type Props = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
};

const Image = ({ src, alt, width, height }: Props) => {
  return (
    <>
      <Suspense
        fallback={
          <Stack
            sx={{ color: "main.white" }}
            spacing={2}
            direction="row"
            justifyContent={"center"}
            alignItems="center"
          >
            <CircularProgress color="inherit" />
          </Stack>
        }
      >
        <img src={src} alt={alt} width={width} height={height}/>
      </Suspense>
    </>
  );
};

export default Image;
