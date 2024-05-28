import { TailSpin } from 'react-loader-spinner';

type SpinnerProps = {
  loading: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div className="flex items-center justify-center">
      <TailSpin color="#3b82f6" height={50} width={50} visible={loading} />
    </div>
  );
};

export default Spinner;
