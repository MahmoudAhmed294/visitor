import {Box ,Stepper ,Step ,StepLabel, Typography} from "@mui/material";

type Props = {
  activeStep: number;
  steps: string[];
};
export default function HorizontalLinearStepper({ activeStep, steps }: Props) {

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}> 
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel >
                <Typography variant="h6" sx={{fontSize:{xs:"12px" , sm:"1.2rem"} , color:"main.white"}}>
                {label}

                </Typography>
                
                </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
