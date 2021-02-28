import { styled } from '@linaria/react'

export default styled.div`
h3 {
  background: green;
  height: 150px;
  border: 1px solid yellow;
}
.slick-prev {
  display: block;
  position: absolute;
  background: url(https://static.chotot.com/storage/default/slide-prev.svg) 50% no-repeat;
  left: -18px;
  z-index: 11;
  background-size: 100%;
  width: 38px;
  height: 38px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: none;
  user-select: none;
  &.slick-disabled {
    display: none !important;
  }
  &:hover {
    zoom: 1.5;
  }
}
.slick-next {
  display: block;
  position: absolute;
  background: url(https://static.chotot.com/storage/default/slide-next.svg) 50% no-repeat;
  background-size: 100%;
  width: 38px;
  height: 38px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: none;
  user-select: none;
  right: -18px;
  z-index: 11;
  &.slick-disabled {
    display: none !important;
  }
  &:hover {
    zoom: 1.5;
  }
}
`
