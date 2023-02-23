import React, { ChangeEvent, useEffect, useState } from 'react';
import { getGallery, getGalleryCollections } from '../../services/galleryService';
import styles from './styles.module.scss';
import { Button, Container, TextField } from '@mui/material';
import { ICollection } from '../../models/ICollection';
import { DEFAULT_COLLECTION } from '../../constants/constants';
import CollectionCard from '../../components/card/Card';

const GalleryPage = () => {
  const [searchWord, setSearchWord] = useState('');
  const [isHideRandom, setIsHideRandom] = useState(false);
  const [collection, setCollection] = useState<ICollection[]>([DEFAULT_COLLECTION]);
  const [randomImg, setRandomImg] = useState<ICollection>(DEFAULT_COLLECTION);

  useEffect(() => {
    getGallery().then((response) => {
      setRandomImg(response);
    });
  }, []);

  const getSearchWord = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchWord(e.target.value);
    e.target.value.length === 0 && setIsHideRandom(false);
  };

  const getSearch = () => {
    getGalleryCollections(searchWord).then((response) => setCollection(response.results));
    searchWord.toString().length !== 0 && setIsHideRandom(true);
  };

  return (
    <Container className="container" sx={{ display: 'flex' }}>
      <div className={styles.search}>
        <TextField sx={{ fontSize: 2 }} label="Введите для поиска" variant="outlined" onChange={getSearchWord} />
        <Button variant="contained" color="success" onClick={getSearch}>
          Искать
        </Button>
      </div>
      <div className={styles.cards}>
        {isHideRandom ? (
          <>
            {collection.map((card) => (
              <CollectionCard
                key={card.id}
                img={card.urls.small}
                firstName={card.user.first_name}
                lastName={card.user.last_name}
              />
            ))}
          </>
        ) : (
          <CollectionCard
            img={randomImg.urls.small}
            firstName={randomImg.user.first_name}
            lastName={randomImg.user.last_name}
          />
        )}
      </div>
    </Container>
  );
};

export default GalleryPage;
