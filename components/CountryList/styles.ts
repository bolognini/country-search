import { breakpoint } from '../../styles/breakpoints.style';

const styles = {
  container: {
    maxHeight: 250,
    width: '100%',
    overflowY: 'scroll' as const,
    boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.10)',
    marginTop: 8,
    borderRadius: '6px',
    padding: 12,
    textAlign: 'center' as const,
    position: 'absolute' as const,
    background: 'white',
  },
  option: {
    listStyle: 'none',
    fontSize: 14,
    padding: 8,
    borderRadius: '6px',
    cursor: 'pointer',
    [breakpoint.medium]: {
      fontSize: 16,
    },
    '&: focus': {
      outline: 'none',
      backgroundColor: '#f1f1f1',
    },
    '&: hover': {
      outline: 'none',
      backgroundColor: '#f1f1f1',
    },
  },
};

export default styles;
