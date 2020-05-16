const LoadingSpinner = () => {
  return (
    <>
      <span className="spinner spinner-large" />
      <style jsx>{`
        .spinner {
          /* Spinner size and color */
          width: 400px;
          height: 400px;
          border-top-color: rgba(19, 27, 48, 1);
          border-left-color: rgba(19, 27, 48, 1);
          display: block;
          margin: auto;

          /* Additional spinner styles */
          animation: spinner 800ms linear infinite;
          border-bottom-color: transparent;
          border-right-color: transparent;
          border-style: solid;
          border-width: 100px;
          border-radius: 50%;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: middle;
        }
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default LoadingSpinner