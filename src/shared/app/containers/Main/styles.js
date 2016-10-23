export default {
  MainIsSlided: {
    overflow: 'hidden'
  },
  MainContent: {
    position: 'relative',
    transform: 'translate(0,0)',
    width: '100%',
    height: '100%',
    zIndex: '1',
    transition: 'transform 0.5s ease-out'
  },
  MainContentIsSlided: {
    transform: 'translate(-240px, 0)'
  },
  MainOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.5s ease-out'
  },
  MainOverlayIsVisible: {
    opacity: 0
  }
}

export const simple = {
  MainOverlayIsVisible: {
    opacity: 0.3
  }
}
