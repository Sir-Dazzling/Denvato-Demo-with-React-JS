import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Pic from '../../images/AdidasManunitedcap.jpg';
import Pic2 from '../../images/AdidasManunitedhoodie.jpg';
import Pic3 from '../../images/NikeLebron17.jpg';
import Pic5 from '../../images/NikeJordanDna.jpg';
import './directory.styles.scss';

class Directory extends React.Component
{
    constructor()
    {
        super();

        this.state = 
        {
            sections: 
            [
                {
                    title: 'hats',
                    /*imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',*/
                    imageUrl: `${Pic}`,
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                   // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    imageUrl: `${Pic2}`,
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    //imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    imageUrl: `${Pic3}`,
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    //imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageUrl: `${Pic5}`,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }      
            ]
        }

    }
    
    render()
    {
      return (
        <div className="directory-menu">
            {
              this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
              ))
            }
        </div>
      )
    }
}

export default Directory;