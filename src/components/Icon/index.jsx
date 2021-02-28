import PropTypes from 'prop-types';

function Icon({ type, width, height, color }) {
  let component = null;
  switch (type) {
    case 'search': {
      component = (
        <g fill='none' fillRule='evenodd'>
          <path
            stroke={color}
            strokeWidth='1.3'
            d='M13.59 13.56a6.334 6.334 0 0 1-4.494 1.858 6.33 6.33 0 0 1-4.494-1.858A6.319 6.319 0 0 1 2.74 9.077a6.317 6.317 0 0 1 1.862-4.483 6.335 6.335 0 0 1 4.494-1.856 6.331 6.331 0 0 1 4.494 1.857 6.317 6.317 0 0 1 1.862 4.482 6.317 6.317 0 0 1-1.862 4.483zm.797.25l.318-.41a6.999 6.999 0 0 0 1.486-4.322 7.053 7.053 0 0 0-2.078-5.005A7.073 7.073 0 0 0 9.096 2a7.067 7.067 0 0 0-5.018 2.073A7.053 7.053 0 0 0 2 9.077a7.054 7.054 0 0 0 2.078 5.005 7.072 7.072 0 0 0 5.017 2.073 7.034 7.034 0 0 0 4.327-1.478l.412-.317 5.54 5.526a.388.388 0 0 0 .551 0 .386.386 0 0 0 0-.55l-5.538-5.525z'
          />
          <path
            stroke='#FFF'
            strokeWidth='.1'
            d='M1 1h20v20H1z'
            opacity='.01'
          />
        </g>
      );
      break;
    }
    case 'caret-down': {
      component = (
        <g fill='none' fillRule='evenodd'>
          <path
            fill='#000'
            d='M6 6L11 11.5 1 11.5z'
            opacity='.8'
            transform='matrix(1 0 0 -1 0 17.5)'
          />
          <path
            stroke={color}
            strokeWidth='.1'
            d='M0 0H12V16H0z'
            opacity='.01'
          />
        </g>
      );
      break;
    }
    case 'check': {
      component = (
        <path
          fill={color}
          fillRule='evenodd'
          d='M189.096 59L183 53.154 185.104 51.114 189.039 54.887 196.839 47 199 48.986z'
          transform='translate(-183 -47)'
        />
      );
      break;
    }
    case 'location': {
      component = (
        <>
          <defs>
            <path id='prefix__a' d='M14 0v16H0V0h14z' />
          </defs>
          <g fill='none' fillRule='evenodd' opacity='0.431'>
            <mask id='prefix__b' fill='#fff'>
              <use xlinkHref='#prefix__a' />
            </mask>
            <g mask='url(#prefix__b)'>
              <path
                fill={color}
                d='M6.131 0C2.745 0 0 2.657 0 5.934c0 1.594.653 3.116 1.709 4.262l4.422 4.977 4.423-4.977c1.056-1.146 1.709-2.668 1.709-4.262C12.263 2.657 9.518 0 6.13 0m0 .898c2.87 0 5.204 2.26 5.204 5.036 0 1.313-.537 2.648-1.473 3.664l-.006.006-.006.006-3.719 4.186L2.413 9.61l-.006-.006-.006-.006C1.465 8.582.928 7.247.928 5.934.928 3.157 3.262.898 6.131.898'
              />
              <path
                stroke={color}
                strokeWidth='0.96'
                d='M6.131 8.202c-1.317 0-2.384-1.033-2.384-2.307 0-1.275 1.067-2.308 2.384-2.308S8.516 4.62 8.516 5.895c0 1.274-1.068 2.307-2.385 2.307'
              />
            </g>
          </g>
        </>
      );
      break;
    }
    default:
      component = null;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {component}
    </svg>
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  width: '22',
  height: '22',
  color: '#000',
};

export default Icon;
