
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashBoardCardInfo = ({fieldName,fieldValue,fieldIcon}) => {
    return (
        <div className="relative flex flex-col h-32 m-4 min-w-72 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
                <div className="flex flex-wrap py-6">
                    <div className="flex-none w-2/3  px-3">
                        <div className=''>
                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">{fieldName}</p>
                            <h5 className="mb-0 font-bold text-2xl">
                                {fieldValue}
                                <span className="ml-2 text-sm font-bold text-lime-500">+10%</span>
                            </h5>
                        </div>
                    </div>
                    <div className="w-4/12  px-3 ml-auto text-right flex-0">
                        <FontAwesomeIcon icon={fieldIcon} size='3x' color='#D3D3D3'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoardCardInfo;