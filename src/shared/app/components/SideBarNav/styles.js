export default {
  SideBarNav: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 0,
    padding: '0',
    backgroundColor: '#333',
    zIndex: 3,
    overflow: 'hidden',
    transition: 'all .5s linear',
    boxShadow: '5px 0 30px 0px black inset',
    textAlign: 'center'
  },
  SideBarNavInner: {
    width: '240px'
  },
  SideBarNavIsOpen: {
    transition: 'none',
    right: '-240px',
    width: '240px'
  },
  SideBarNavList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  SideBarNavTitle: {
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: '30px'
  },
  SideBarNavListItem: {
    margin: '15px 0'
  },
  SideBarNavLink: {
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: '100',
    ':visited': 'white'
  },
  SideBarNavLinkSelected: {
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}
