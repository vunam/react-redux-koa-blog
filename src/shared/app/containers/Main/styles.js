const slideDuration = '.5s'

export default {
  Main: {
  },
  MainIsSlided: {
    overflow: 'hidden'
  },
  MainContent: {
    position: 'relative',
    transform: 'translate(0,0)',
    width: '100%',
    height: '100%',
    zIndex: '1',
    transition: `transform ${slideDuration} ease-out`
  },
  MainContentIsSlided: {
    transform: 'translate(-240px, 0)'
  },
  MainOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: 'black',
    opacity: 0,
    zIndex: 2,
    transition: `opacity ${slideDuration} ease-out, width 0s ${slideDuration}, height 0s ${slideDuration}`
  },
  MainOverlayIsVisible: {
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: `opacity ${slideDuration} ease-out, width 0s 0s, height 0s 0s`
  }
}

export const simple = {
  MainOverlayIsVisible: {
    opacity: 0.3,
    width: '100%',
    height: '100%',
    transition: `opacity ${slideDuration} ease-out, width 0s 0s, height 0s 0s`
  }
}
