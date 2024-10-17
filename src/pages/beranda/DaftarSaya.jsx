import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import { useEffect, useState } from 'react';
import Footer from '../../component/footer';
import useDeleteDaftarSaya from '../../component/hooks/DaftarSaya/useDeleteDaftarSaya';
import useEditDaftarSaya from '../../component/hooks/DaftarSaya/useEditDaftarSaya';
import useGetDaftarSaya from '../../component/hooks/DaftarSaya/useGetDaftarSaya';

const DaftarSaya = () => {
  const [listdaftarsaya, setListDaftarSaya] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const { deleteDaftarSaya } = useDeleteDaftarSaya("daftarsaya");
  const { editDaftarSaya } = useEditDaftarSaya("daftarsaya");

  const { data, isLoading, isError,error } = useGetDaftarSaya("daftarsaya");
  
  useEffect(() => {
    if (data) {
      setListDaftarSaya(data);
    }
  }, [data]);

  const handleDelete = async (id) => {
    await deleteDaftarSaya(id);
    setListDaftarSaya((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleEdit = async (id, imgurl) => {
    try {
      setLoadingId(id);
      await editDaftarSaya(id, imgurl);
      setListDaftarSaya((prevList) =>
        prevList.map((item) => (item.id === id ? { ...item, image: imgurl } : item))
      );
      console.log("Edit successful:", id, imgurl);
    } catch (error) {
      console.error("Failed to edit:", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      <Header />
      <DaftarSayaFragments title="Daftar Saya">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          
          <p>There was an error fetching the list.  {error.message}</p>
        ) : listdaftarsaya && listdaftarsaya.length > 0 ? (
          listdaftarsaya.map((movie, index) => (
            <CardThumbnail
              key={index}
              {...movie}
              removeDaftarSaya={() => handleDelete(movie.id)}
              editDaftarSaya={handleEdit}
              loading={loadingId === movie.id}
            />
          ))
        ) : (
          <p>Tidak ada film yang ditambahkan</p>
        )}
      </DaftarSayaFragments>
      <Footer />
    </div>
  );
};

export default DaftarSaya;
