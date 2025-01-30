import Spline from '@splinetool/react-spline';

export default function Chips3D() {
  return (
    <Spline 
      scene="/chips.spline"
      style={{ width: '100%', height: '100vh', opacity: 0.7}}
    />
  );
}