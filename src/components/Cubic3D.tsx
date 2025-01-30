import Spline from '@splinetool/react-spline';

export default function Cubic3D() {
  return (
    <Spline 
      scene="/cubic.spline"
      style={{ width: '100%', height: '100vh' }}
    />
  );
}