import React from 'react'

function Payout() {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center p-5 pb-2'>
                    <h1 className='font-medium text-xl'>Overview</h1>
                    <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded w-32 p-2">
                        <option selected>This month</option>
                    </select>
                </div>
                <div className='flex p-3'>
                    <div className='basis-1/3 rounded-md shadow-md bg-[#146EB4] text-[#FFFFFF]'>
                        <div>
                            <div className='flex items-center pt-4 px-6 gap-1'>
                                <span className='text-[16px] leading-6'>Next layout</span>
                                <span className='text-[#FFFFFF] px-1'><svg width="15" height="14" viewBox="0 0 25 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 17.4526C13.833 18.1888 13.2362 18.7856 12.5 18.7856C11.7638 18.7856 11.1669 18.1888 11.1669 17.4526C11.1669 16.7163 11.7638 16.1195 12.5 16.1195C13.2362 16.1195 13.833 16.7163 13.833 17.4526Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0035 5.84149C11.718 5.54552 12.5043 5.46808 13.2628 5.61896C14.0214 5.76985 14.7181 6.14228 15.265 6.68917C15.8119 7.23605 16.1843 7.93283 16.3352 8.69138C16.4861 9.44993 16.4087 10.2362 16.1127 10.9507C15.8167 11.6653 15.3155 12.276 14.6724 12.7057C14.254 12.9853 13.7877 13.1801 13.2999 13.282V13.4534C13.2999 13.8952 12.9417 14.2534 12.4999 14.2534C12.0581 14.2534 11.6999 13.8952 11.6999 13.4534V12.5647C11.6999 12.3525 11.7842 12.1491 11.9342 11.999C12.0843 11.849 12.2877 11.7647 12.4999 11.7647C12.9569 11.7647 13.4036 11.6292 13.7835 11.3753C14.1635 11.1215 14.4596 10.7606 14.6345 10.3384C14.8094 9.91626 14.8551 9.45171 14.766 9.00352C14.6768 8.55534 14.4568 8.14366 14.1337 7.82054C13.8105 7.49742 13.3988 7.27737 12.9507 7.18822C12.5025 7.09907 12.0379 7.14482 11.6158 7.3197C11.1936 7.49457 10.8327 7.7907 10.5789 8.17066C10.325 8.55061 10.1895 8.99731 10.1895 9.45427C10.1895 9.8961 9.83131 10.2543 9.38948 10.2543C8.94765 10.2543 8.58948 9.8961 8.58948 9.45427C8.58948 8.68086 8.81882 7.92481 9.24851 7.28174C9.67819 6.63867 10.2889 6.13746 11.0035 5.84149Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.80004C7.41893 2.80004 3.29995 6.91902 3.29995 12C3.29995 17.0811 7.41893 21.2 12.5 21.2C17.581 21.2 21.7 17.0811 21.7 12C21.7 6.91902 17.581 2.80004 12.5 2.80004ZM1.69995 12C1.69995 6.03537 6.53528 1.20004 12.5 1.20004C18.4646 1.20004 23.2999 6.03537 23.2999 12C23.2999 17.9647 18.4646 22.8 12.5 22.8C6.53528 22.8 1.69995 17.9647 1.69995 12Z" fill="white" />
                                </svg></span>
                            </div>
                            <div className='flex items-center justify-around py-4 px-1'>
                                <span className='text-[32px] leading-[38px] font-medium'>&#8377; 2,312.23</span>
                                <div className='flex items-center'>
                                    <span className='text-[20px] leading-6 font-medium underline p-1'>23 orders</span>
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" className='-rotate-90' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center rounded-md justify-around bg-[#0E4F82] py-2'>
                            <span>Next payout date</span>
                            <span className='font-medium'>Today, 04:00PM</span>
                        </div>
                    </div>
                    <div className='basis-1/3 mx-3'>
                        <div className='shadow-md'>
                            <div className='flex items-center pt-4 px-6 gap-1'>
                                <span className='text-[16px] leading-6'>Amount Pending</span>
                                <span className='px-1'><svg width="15" height="14" viewBox="0 0 25 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 17.4526C13.833 18.1888 13.2362 18.7856 12.5 18.7856C11.7638 18.7856 11.1669 18.1888 11.1669 17.4526C11.1669 16.7163 11.7638 16.1195 12.5 16.1195C13.2362 16.1195 13.833 16.7163 13.833 17.4526Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0035 5.84149C11.718 5.54552 12.5043 5.46808 13.2628 5.61896C14.0214 5.76985 14.7181 6.14228 15.265 6.68917C15.8119 7.23605 16.1843 7.93283 16.3352 8.69138C16.4861 9.44993 16.4087 10.2362 16.1127 10.9507C15.8167 11.6653 15.3155 12.276 14.6724 12.7057C14.254 12.9853 13.7877 13.1801 13.2999 13.282V13.4534C13.2999 13.8952 12.9417 14.2534 12.4999 14.2534C12.0581 14.2534 11.6999 13.8952 11.6999 13.4534V12.5647C11.6999 12.3525 11.7842 12.1491 11.9342 11.999C12.0843 11.849 12.2877 11.7647 12.4999 11.7647C12.9569 11.7647 13.4036 11.6292 13.7835 11.3753C14.1635 11.1215 14.4596 10.7606 14.6345 10.3384C14.8094 9.91626 14.8551 9.45171 14.766 9.00352C14.6768 8.55534 14.4568 8.14366 14.1337 7.82054C13.8105 7.49742 13.3988 7.27737 12.9507 7.18822C12.5025 7.09907 12.0379 7.14482 11.6158 7.3197C11.1936 7.49457 10.8327 7.7907 10.5789 8.17066C10.325 8.55061 10.1895 8.99731 10.1895 9.45427C10.1895 9.8961 9.83131 10.2543 9.38948 10.2543C8.94765 10.2543 8.58948 9.8961 8.58948 9.45427C8.58948 8.68086 8.81882 7.92481 9.24851 7.28174C9.67819 6.63867 10.2889 6.13746 11.0035 5.84149Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.80004C7.41893 2.80004 3.29995 6.91902 3.29995 12C3.29995 17.0811 7.41893 21.2 12.5 21.2C17.581 21.2 21.7 17.0811 21.7 12C21.7 6.91902 17.581 2.80004 12.5 2.80004ZM1.69995 12C1.69995 6.03537 6.53528 1.20004 12.5 1.20004C18.4646 1.20004 23.2999 6.03537 23.2999 12C23.2999 17.9647 18.4646 22.8 12.5 22.8C6.53528 22.8 1.69995 17.9647 1.69995 12Z" fill="black" />
                                </svg></span>
                            </div>
                            <div className='flex items-center justify-around py-4 px-2'>
                                <span className='text-[32px] leading-[38px] font-medium'>&#8377; 90,312.23</span>
                                <div className='flex items-center'>
                                    <span className='text-[20px] leading-6 text-blue-500 font-medium underline p-1'>13 orders</span>
                                    <span><svg width="20" height="20" viewBox="0 0 20 20" className='-rotate-90' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="blue" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='shadow-md'>
                        <div className='flex items-center pt-4 px-6 gap-1'>
                            <span className='text-[16px] leading-6'>Amount Processed</span>
                            <span className='px-1'><svg width="15" height="14" viewBox="0 0 25 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.833 17.4526C13.833 18.1888 13.2362 18.7856 12.5 18.7856C11.7638 18.7856 11.1669 18.1888 11.1669 17.4526C11.1669 16.7163 11.7638 16.1195 12.5 16.1195C13.2362 16.1195 13.833 16.7163 13.833 17.4526Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0035 5.84149C11.718 5.54552 12.5043 5.46808 13.2628 5.61896C14.0214 5.76985 14.7181 6.14228 15.265 6.68917C15.8119 7.23605 16.1843 7.93283 16.3352 8.69138C16.4861 9.44993 16.4087 10.2362 16.1127 10.9507C15.8167 11.6653 15.3155 12.276 14.6724 12.7057C14.254 12.9853 13.7877 13.1801 13.2999 13.282V13.4534C13.2999 13.8952 12.9417 14.2534 12.4999 14.2534C12.0581 14.2534 11.6999 13.8952 11.6999 13.4534V12.5647C11.6999 12.3525 11.7842 12.1491 11.9342 11.999C12.0843 11.849 12.2877 11.7647 12.4999 11.7647C12.9569 11.7647 13.4036 11.6292 13.7835 11.3753C14.1635 11.1215 14.4596 10.7606 14.6345 10.3384C14.8094 9.91626 14.8551 9.45171 14.766 9.00352C14.6768 8.55534 14.4568 8.14366 14.1337 7.82054C13.8105 7.49742 13.3988 7.27737 12.9507 7.18822C12.5025 7.09907 12.0379 7.14482 11.6158 7.3197C11.1936 7.49457 10.8327 7.7907 10.5789 8.17066C10.325 8.55061 10.1895 8.99731 10.1895 9.45427C10.1895 9.8961 9.83131 10.2543 9.38948 10.2543C8.94765 10.2543 8.58948 9.8961 8.58948 9.45427C8.58948 8.68086 8.81882 7.92481 9.24851 7.28174C9.67819 6.63867 10.2889 6.13746 11.0035 5.84149Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.80004C7.41893 2.80004 3.29995 6.91902 3.29995 12C3.29995 17.0811 7.41893 21.2 12.5 21.2C17.581 21.2 21.7 17.0811 21.7 12C21.7 6.91902 17.581 2.80004 12.5 2.80004ZM1.69995 12C1.69995 6.03537 6.53528 1.20004 12.5 1.20004C18.4646 1.20004 23.2999 6.03537 23.2999 12C23.2999 17.9647 18.4646 22.8 12.5 22.8C6.53528 22.8 1.69995 17.9647 1.69995 12Z" fill="black" />
                            </svg></span>
                        </div>
                        <div className='flex items-center py-4 px-7'>
                            <span className='text-[32px] leading-[38px] font-medium'>&#8377; 23,92,312.23</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payout