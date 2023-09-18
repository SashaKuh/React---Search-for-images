import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <>
      {visible && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
};