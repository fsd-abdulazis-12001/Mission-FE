import CircularProgress from '@mui/material/CircularProgress';
// import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const LoadingComponent = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="">
        <Box sx={{ width: '100%' }}>
         <CircularProgress />
        </Box>
      </div>
      <p className="text-lg text-white ml-4">Loading...</p>
    </div>
  );
};

export default LoadingComponent;