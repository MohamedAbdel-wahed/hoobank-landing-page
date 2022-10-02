import { apple, bill, card, google, send, shield, star } from '../assets';
import Button from './utils/Button';
import SubTitle from './utils/SubTitle';
import Title from './utils/Title';


export default function Features(){
    return (
      <div
        id="features"
        className="w-[90%] sm:w-[85%] 2xl:w-[80%] mx-auto my-28 flex flex-col items-center gap-y-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-12">
          <div className="order-2 lg:order-1">
            <Title>
              you do the bussines,
              <br />
              we will handle the money.
            </Title>
            <SubTitle>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </SubTitle>

            <Button>get started</Button>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-y-5">
            <ListItem
              icon={star}
              title="rewards"
              description="the best credit cards offer some tantalizing combinations of
            promotions and prizes"
            />

            <ListItem
              icon={shield}
              title="100% secured"
              description="we take proactive steps make sure your information and transactions are secure."
              active
            />

            <ListItem
              icon={send}
              title="balance transfer"
              description="a balance transfer credit card can save you a lot of money in interest charges."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-8 gap-y-12">
          <div>
            <img src={bill} alt="bill-image" />
          </div>
          <div>
            <Title>easily control your billing & invoicing</Title>
            <SubTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis distinctio nostrum quod nemo quae iste sit
              praesentium quos explicabo quas.
            </SubTitle>
            <div className="mt-9 flex items-center gap-6">
              <button>
                <img src={google} alt="google-play" />
              </button>
              <button>
                <img src={apple} alt="apple-store" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-12">
          <div className="order-2 lg:order-1">
            <Title>find a better card deal in few easy steps.</Title>
            <SubTitle>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </SubTitle>

            <Button>get started</Button>
          </div>
          <div className='order-1 lg:order-2'>
            <img src={card} alt="card-image" />
          </div>
        </div>
      </div>
    )
}


const ListItem= ({icon,title,description,active})=> {
  return (
    <div
      className={`w-fit flex items-center gap-x-6 px-3 py-4  ${
        active ? "bg-slate-800 dark:bg-slate-300/10" : "bg-white dark:bg-transparent shadow-lg dark:shadow-none shadow-gray-200"
      } rounded-xl`}
    >
      <span className="p-3 bg-slate-900/90 dark:bg-cyan-900/30 rounded-full">
        <img src={icon} alt={title} className="w-14 sm:w-auto" />
      </span>
      <div className="flex flex-col gap-y-2">
        <h3
          className={`font-semibold text-lg capitalize ${
            active ? "text-white" : "text-slate-800 dark:text-white"
          }`}
        >
          {title}
        </h3>
        <span
          className={`w-full lg:w-10/12 text-sm sm:text-base ${
            active ? "text-slate-200" : "text-slate-700 dark:text-slate-200"
          } first-letter:capitalize leading-tight break-words`}
        >
          {description}
        </span>
      </div>
    </div>
  )
}