import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItems from "./MenuItems";
import useRegisterModal from "../hooks/useRegisterModal";

const UserProfile = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const registerModal=useRegisterModal();
	
	
	return (
		<div className="relative">
			<div className="flex flex-row items-center ">
				<div className="rounded-full hidden sm:hidden lg:block px-4 hover:bg-neutral-100 py-2 transition ease-out">Airbnb your home</div>
				<div
					className="rounded-full flex flex-row items-center mx-2 gap-2 shadow-sm px-4 py-2 hover:shadow-md transition ease-out cursor-pointer"
					onClick={() => setOpenMenu((prev) => !prev)}
				>
					<AiOutlineMenu />
					<Avatar />
				</div>
			</div>
			{openMenu && (
				<div className="absolute top-18 bg-white shadow-md right-0  px-6 py-2  sm:right-4 sm:w-auto">
					<div className="flex flex-col gap-2">
                        <MenuItems label='Login' />
                        <MenuItems  label='Signup' onClick={registerModal.onOpen}/>
						
                    </div>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
