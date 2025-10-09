import { useEffect, useState } from "react";

const useCheckMobileScreen = () => {
	const [width, setWidth] = useState();
	useEffect(() => {
		setWidth(window && window?.innerWidth);
	}, []);

	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window?.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window?.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	return width <= 640;
};

export default useCheckMobileScreen;