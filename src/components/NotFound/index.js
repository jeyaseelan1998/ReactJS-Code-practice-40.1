import './index.css'

const NotFound = () => (
  <div className="route-container">
    <img
      className="not-found-image"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
    />
    <h1 className="not-found-title">Lost Your Way?</h1>
    <p className="not-found-description">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
