export default {
  SideBarNav: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 0,
    backgroundColor: '#333',
    zIndex: 1,
    overflow: 'hidden',
    transition: 'all .5s linear'
  },
  SideBarNavInner: {
    width: '240px'
  },
  SideBarNavIsOpen: {
    transition: 'none',
    right: '-240px',
    width: '240px'
  }
}
