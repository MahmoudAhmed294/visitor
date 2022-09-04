import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "components/Shared/Image";
import { getCompany } from "redux/SearchSlice";
import { useAppDispatch } from "utils/hooks/useStore";

interface dataCompany {
  name: string;
  id:number;
  img: string;
}
type Props = {
  data: dataCompany;
};

const Company = ({ data }: Props) => {
 const dispatch = useAppDispatch()
  return (
    <Link to={`/company/${data.id}`} style={{ textDecoration: "none" }} onClick={() =>dispatch(getCompany(+data.id))}>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            transition: "0.3s ease",
            "& :hover": {
              transform: "scale(1.2)",
              transition: "0.3s ease",
            },
          }}
        >
          <Image
            src={data.img}
            alt={data.name}
            width={"100%"}
            height={"125px"}
          />
        </Box>
        <Typography variant="h6" sx={{ color: "#fff", textAlign: "center" }}>
          {data.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default Company;
