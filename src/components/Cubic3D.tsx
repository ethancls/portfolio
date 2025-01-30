import Spline from '@splinetool/react-spline';

export default function Cubic3D() {
  return (
    <div>
      <Spline 
        scene="/cubic.spline"
        style={{ width: '80%', height: '80vh', opacity: 0.7 }}
      />
    </div>
  );
}