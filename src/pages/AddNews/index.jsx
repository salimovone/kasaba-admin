import { GrAdd } from 'react-icons/gr';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { newsSchema } from '../../schemas';
import Axios from '../../services/Axios';
import { useLocation } from 'react-router-dom';
// import news from '../../services/news';
// import { getCookie } from "../../services/helper";
// import { useLocation } from "react-router-dom";

const AddNews = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [image, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState({ type: false, id: null });
    // const navigate = useNavigate();
    const { state } = useLocation();

    const onSubmit = async values => {
        const form = new FormData();
        form.append('title', values.title);
        form.append('text', values.text);
        form.append('author', '1');
        // form.append('views', '3');
        form.append('image', image);
        // await news
        //     .newsAdd(form)
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => console.log(err))
        //     .finally(() => {
        //         resetForm();
        //         setImage(null);
        //         setBackgroundImage('');
        //     });

        if (isEdit.type) {
            try {
                await Axios({
                    url: `news/news/${isEdit.id}`,
                    method: 'put',
                    data: form,
                    // headers: {
                    //     Authorization: `Bearer ${getCookie('_auth')}`,
                    // },
                });
            } catch (error) {
                throw new Error(error.message);
            } finally {
                resetForm();
                setImage(null);
                setBackgroundImage('');
            }
        } else {
            try {
                await Axios({
                    url: 'news/news/',
                    method: 'post',
                    data: form,
                    // headers: {
                    //     Authorization: `Bearer ${getCookie('_auth')}`,
                    // },
                });
            } catch (error) {
                throw new Error(error.message);
            } finally {
                resetForm();
                setImage(null);
                setBackgroundImage('');
            }
        }
        setIsEdit({ type: false, id: null });
    };

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        // handleReset,
        // setFieldValue,
        resetForm,
        setValues,
    } = useFormik({
        initialValues: {
            title: '',
            text: '',
        },
        onSubmit: onSubmit,
        validationSchema: newsSchema,
    });

    const handleFileChange = event => {
        const file = event.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBackgroundImage(reader.result); // Faylni URL ga o'girish
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        if (state) {
            setValues({
                title: state.title,
                text: state.text,
            });
            setIsEdit({ type: true, id: state.id });
        }
    }, [setValues, state]);
    return (
        <div className='w-full pr-9 pt-8 p-4 '>
            <form onSubmit={handleSubmit}>
                <div className='bg-gray-300 rounded-3xl overflow-hidden relative h-48'>
                    <div
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                        className='w-full h-full absolute top-0 left-0 z-40'
                    ></div>
                    <input
                        type='file'
                        accept='*.jpeg *.jpg *.png *.jfif *.pjpeg *.pjp *.webp'
                        className='w-full h-48 opacity-0 absolute z-50 cursor-pointer rounded'
                        onChange={handleFileChange}
                        id='image'
                        required
                    />
                    <div
                        className={
                            'w-full h-full justify-center items-center flex absolute top-0 left-0 z-30 text-7xl font-bold text-slate-600'
                        }
                    >
                        <GrAdd />
                    </div>
                </div>
                <input
                    value={values.title}
                    id='title'
                    type='text'
                    placeholder='Mavzu: '
                    className='w-full outline-none border mt-4 py-2 px-5 rounded-lg  border-sky-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.title && touched.title && values.title ? (
                    <p className='text-xs  ml-4 text-red-700'>{errors.title}</p>
                ) : null}
                <br />
                <textarea
                    value={values.text}
                    id='text'
                    type='text'
                    placeholder="Ma'lumot: "
                    className='w-full h-72 outline-none border mt-4 py-3 px-5 rounded-lg border-sky-500'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.text && touched.text && values.text ? (
                    <p className='text-xs  ml-4 text-red-700'>{errors.text}</p>
                ) : null}
                <br />
                <input
                    type='submit'
                    id='submit'
                    className='float-right neo-btn'
                    value={isEdit.type ? 'Tahrirlash' : 'Yuborish'}
                    // onClick={() => {
                    //     navigate('/news');
                    // }}
                />
            </form>
        </div>
    );
};

export default AddNews;
