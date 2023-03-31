import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";

const Navbar = () => {
	return (
		<div className="fixed shadow-sm bg-white z-10 w-full">
			<div className="border-b-2 py-4">
				<Container>
					<div className="flex flex-row items-center justify-between w-full ">
						<Logo />
                        <SearchInput/>
                       <UserProfile/>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
