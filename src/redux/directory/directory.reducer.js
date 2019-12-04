
import Pic from '../../images/AdidasManunitedcap.jpg';
import Pic2 from '../../images/ManUnitedHoodie.jpg';
import Pic3 from '../../images/NikeLebron17.jpg';
import Pic4 from '../../images/Ariana.jpg';
import Pic5 from '../../images/NikeJordanDna.jpg';

const INITIAL_STATE = 
{
    sections: 
            [
                {
                    title: 'hats',
                    imageUrl: `${Pic}`,
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: `${Pic2}`,
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: `${Pic3}`,
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },                     
                  {
                    title: 'womens',
                    imageUrl: `${Pic4}`,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: `${Pic5}`,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }      
            ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) 
    {
        default:
            return state;
    }
}

export default directoryReducer;