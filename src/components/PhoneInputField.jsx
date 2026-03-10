import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputField = ({ value, onChange, theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const isModal = theme === 'modal';

    return (
        <div className="phone-input-container">
            <style>{`
                /* Override some react-phone-input-2 specific styles to match Tailwind borders */
                .phone-input-container .react-tel-input .form-control {
                    width: 100%;
                }
                .phone-input-container .react-tel-input .country-list .country:hover, 
                .phone-input-container .react-tel-input .country-list .country.highlight {
                    background-color: #f8f5f0;
                }
                .phone-input-container .react-tel-input .selected-flag:hover, 
                .phone-input-container .react-tel-input .selected-flag:focus {
                    background-color: transparent !important;
                }
                .phone-input-container .react-tel-input .flag-dropdown.open {
                    background-color: transparent !important;
                }
                /* Hide placeholder on focus for this component as well */
                .phone-input-container .react-tel-input .form-control:focus::placeholder {
                    color: transparent;
                }
            `}</style>
            <PhoneInput
                country={'in'}
                value={value}
                onChange={onChange}
                enableSearch={true}
                placeholder="Phone Number *"
                inputClass={`!w-full !text-sm !transition-colors focus:!outline-none focus:!border-[#9b7a44] focus:!shadow-none ${
                    isModal ? '!rounded !border-gray-200 !bg-white !text-[#222222] !h-[46px] placeholder:!text-[#9ca3af]' : '!rounded-none'
                } ${
                    isDark && !isModal
                        ? '!bg-white/5 !border-white/20 !text-white !h-[38px] placeholder:!text-white/80'
                        : !isModal ? '!bg-white !border-[#fffdfb] !text-[#222222] !h-[46px] placeholder:!text-[#666666]/40' : ''
                }`}
                buttonClass={`!border-r-0 !bg-transparent ${isModal ? '!rounded-l !border-gray-200 hover:!bg-gray-50' : '!rounded-none'} ${
                    isDark && !isModal
                        ? '!border-white/20 hover:!bg-white/10'
                        : !isModal ? '!border-[#fffdfb] hover:!bg-[#f8f5f0]' : ''
                }`}
                dropdownClass="!rounded-none !text-sm !bg-white !text-[#222222] !border-[#fffdfb]"
                searchClass="!rounded-none !text-sm !w-[90%] !ml-2 !bg-white !text-[#222222] !border-[#fffdfb]"
            />
        </div>
    );
};

export default PhoneInputField;
