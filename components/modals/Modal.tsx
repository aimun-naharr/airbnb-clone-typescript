import React, { useCallback, useEffect, useState } from "react";
interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryLabel?: string;
}
const Modal: React.FC<ModalProps> = ({ actionLabel, onClose, onSubmit, body, disabled, footer, isOpen, secondaryAction, secondaryLabel, title }) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) return;
		onSubmit();
	}, [disabled, onSubmit]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) return;
		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="
        flex 
        items-center 
        justify-center
        bg-neutral-600/70 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        z-50 
        inset-0 
        focus:outline-none
        "
		>
			<div
				className="
            relative
            w-full
            sm:w-5/6
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto
            h-full
            lg:h-auto
            md:h-auto
           
            "
			>
				{/* content */}
				<div
					className={`  translate 
                 duration-300
                 h-full
                 ${showModal ? "translate-y-0" : "translate-y-full"}
                 ${showModal ? "opacity-100" : "opacity-0"}
                 `}
				>
					<div
						className="
                        translate 
                        h-full 
                        lg:h-auto 
                        md:h-auto 
                        border-0 
                        rounded-lg 
                        relative
                        flex
                        flex-col
                         w-full
                         outline-none
                    "
					>
                        {/* header */}
                        <div className="flex
                        items-center
                        p-6
                        rounded-t
                        justify-center
                        relative border-b-2 bg-white shadow-lg">

                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
