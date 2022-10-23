import Image from "next/future/image";

import Logo from "./../../public/logo.jpeg";

export default function TestImage() {
  return (
    <div>
      TEST IMage
      <Image src={Logo} alt="test" />
    </div>
  );
}
