import './tab.scss'

const Tab = ({ text }) => {
  return (
    <li class="tab text-secondary inline-block border-b-[4px] border-x-[1px] border-t-[1px] rounded-md py-3 px-4 text-blue-dark font-semibold cursor-pointer">
      {text}
    </li>
  )
}

export default Tab
