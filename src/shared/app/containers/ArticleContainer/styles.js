import Radium from 'radium'

const fadeIn = Radium.keyframes({
  '0%': {
    top: '50px',
    opacity: 0
  },
  '100%': {
    top: 0,
    opacity: 1
  }
})

export default {
  ArticleContainer: {
    position: 'relative',
    width: '100%',
    animation: 'x 1.5s forwards',
    animationName: fadeIn
  },
  ArticleContainerLoadMore: {
    width: '100%',
    height: '60px',
    textAlign: 'center',
    border: 'none',
    backgroundColor: '#bbb'
  }
}
