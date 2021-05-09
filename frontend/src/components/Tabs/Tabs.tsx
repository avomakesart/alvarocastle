import React, { ReactNode, useCallback, useState } from 'react';
interface TabsProps {
  children: any;
  color: string;
  vertical?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ children, color, vertical }) => {
  const initialTab = children[0].props.label
  const [activeTab, setActiveTab] = useState(initialTab)
  const handleActiveTab = useCallback(label => setActiveTab(label), [])

  const tabs = (
    <ul
      className={`flex mb-0 list-none flex-wrap pt-3 pb-4 ${
        vertical ? 'flex-row max-h-72 md:flex-col' : 'flex-row'
      }`}
      role='tablist'
    >
      {children.map((child: any | undefined) => (
        <li
          className='-mb-px mr-2 last:mr-0 flex-auto text-center'
          key={child.props.label}
        >
          <a
            className={
              'text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal ' +
              (child.props.label === activeTab
                ? 'text-white border-b-2 border-' + color + '-600'
                : 'text-white bg-transparent')
            }
            onClick={(e) => {
              e.preventDefault();
              handleActiveTab(child.props.label);
            }}
            key={child.props.label}
            data-toggle='tab'
            href='#link1'
            role='tablist'
          >
            {child.props.tabName}
          </a>
        </li>
      ))}
    </ul>
  );

  const tabContent = children.filter(
    (child: any) => child.props.label === activeTab
  );

  return (
    <div className='flex flex-wrap'>
      <div className={`w-full ${vertical ? 'md:flex' : ''}`}>
        {tabs}
        <div className='relative flex flex-col min-w-0 break-words bg-transparen text-whitet w-full mb-6 shadow-lg rounded'>
          <div className='px-4 py-5 flex-auto'>
            <div className='tab-content tab-space'>
              {children.map((child: any) => (
                <div
                  className={`bg-white ${
                    child.props.label === activeTab ? 'block' : 'hidden'
                  }`}
                  key={child.props.label}
                >
                  {tabContent}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = (props: any) => {
  return props.children;
};

export { Tabs, Tab }