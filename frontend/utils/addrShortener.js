import ReactHtmlParser from 'react-html-parser'

export default function (addr) {
  return ReactHtmlParser(
    addr.substring(0, 6) +
      '&bull;&bull;&bull;' +
      addr.substring(addr.length - 7, addr.length - 1),
  )
}
