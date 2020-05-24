const MiningIndicator = () => {
  return (
    <div>
      <div className="sp sp-loadbar"></div>
      <style>{`
        .sp-loadbar {
          width: 50px;
          height: 18px;
          border: 1px #FFF solid;
          border-radius: 4px;
          background: linear-gradient(-60deg, transparent 0%, transparent 50%, #FFF 50%, #FFF 75%, transparent 75%, transparent);
          background-size: 20px 30px;
          background-position: 0px 0px;
          -webkit-animation: spLoadBar 0.8s infinite linear;
          animation: spLoadBar 0.8s infinite linear;
        }
        @keyframes spLoadBar {
          0% {
              background-position: 0px 0px;
          }
          100% {
              background-position: -20px 0px;
          }
        }
      `}</style>
    </div>
  )
}

export default MiningIndicator