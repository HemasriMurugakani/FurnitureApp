import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 6.091h1.849c.306 1.705 1.46 2.568 3.443 2.568s3.137-.863 3.442-2.568H22a1 1 0 0 0 0-2H10.734c-.306-1.705-1.459-2.568-3.442-2.568s-3.137.863-3.443 2.568H2a1 1 0 0 0 0 2Zm5.292-2.569c1.144 0 1.525.227 1.525 1.568 0 1.332-.399 1.568-1.525 1.568-1.145 0-1.525-.227-1.525-1.568 0-1.332.4-1.568 1.525-1.568ZM22 11h-1.849c-.306-1.705-1.46-2.568-3.443-2.568s-3.137.863-3.442 2.568H2a1 1 0 0 0 0 2h11.266c.306 1.705 1.459 2.568 3.442 2.568s3.137-.863 3.443-2.568H22a1 1 0 0 0 0-2Zm-5.292 2.568c-1.144 0-1.525-.227-1.525-1.568 0-1.332.399-1.568 1.525-1.568 1.145 0 1.525.227 1.525 1.568 0 1.331-.4 1.568-1.525 1.568ZM22 17.909H10.734c-.306-1.705-1.459-2.568-3.442-2.568s-3.137.863-3.443 2.568H2a1 1 0 1 0 0 2h1.849c.306 1.705 1.459 2.568 3.443 2.568s3.137-.863 3.442-2.568H22a1 1 0 1 0 0-2ZM7.292 20.477c-1.145 0-1.525-.227-1.525-1.568 0-1.331.4-1.568 1.525-1.568 1.144 0 1.525.227 1.525 1.568 0 1.331-.399 1.568-1.525 1.568Z" />
  </Svg>
)
export default SvgComponent
