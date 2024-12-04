

import { IoIosArrowBack } from 'react-icons/io';
import { PasswordInput } from '../core/PasswordInput';
import { PasswordRequirements } from '../util/passwordvalidation';


export const RegisterPasswordForm= ({password, setView, setPassword, confirmPassword, setConfirmPassword, validation, passwordsMatch}) => {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <div className='h-screen flex-col pt-16'>
          <div className='flex'>
            <IoIosArrowBack className='h-7 w-7' onClick={()=>setView('registerForm')}/>
            <h2 className='font-poppins w-[90%] text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Create a password</h2>
          </div>
          <p className="text-gray-600 text-sm text-center mb-6">
            The password must be 8 characters, including 1 uppercase letter,
            1 number and 1 special character.
          </p>

          <div className='flex justify-center items-center'>
            <div className="space-y-4 w-[100%] md:w-[70%] xl:w-[60%]">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter password
                </label>
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  isValid={password ? validation.isValid : undefined}
                />
                <PasswordRequirements validation={validation} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm password
                </label>
                <PasswordInput
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  isValid={confirmPassword ? passwordsMatch : undefined}
                />
                {confirmPassword && !passwordsMatch && (
                  <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};