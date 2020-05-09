import dynamic from 'next/dynamic'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })

const Header = () => {
  return (
    <header role="header">
      <div className="header-row">
        <div className="brand">
          <a href="/">
            <div className="logo">
              <img src="https://i.imgur.com/qGCfAI9.png" alt="logo" />
              <span>Pool Sharks</span>
            </div>
          </a>
        </div>
        <SignInArea />
      </div>
      <hr />
      <style jsx>{`
        header {
          padding: 10px;
        }
        .header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        .logo img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          display: inline-block;
          margin-right: 10px;
        }
      `}</style>
    </header>
  )
}

export default Header
