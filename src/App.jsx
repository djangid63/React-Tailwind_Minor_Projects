function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-gradient-to-b from-[rgb(13,17,29)] via-[rgb(19,24,43)] to-[rgb(29,39,66)]">
      <div className="flex justify-end">
        <div className="m-4 p-3 rounded-[15px] bg-[rgb(40,47,66)] flex items-center gap-x-2 text-[rgb(230,218,211)]">
          <div >Sign in</div>
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </span>
        </div>
      </div>
      <div class="w-full h-32 flex  justify-center items-center">
        <div class="gap-x-4 p-4 w-[744px] h-[64px] border-[0.1px] rounded-[28px] border-[#fff2] bg-[#19203A] flex items-center justify-center  text-[rgb(230,218,211)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          <textarea
            class="p-[13px] w-[85%] h-[50px] bg-[#0E1420] text-gray-100 border-none rounded-[20px] focus:outline-none focus:ring-0 resize-none placeholder-gray-500 placeholder:font-bold "
            placeholder="Message Copilot "
          ></textarea>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
            <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
          </svg>


        </div>
      </div>

    </div>
  );
}

export default App;
