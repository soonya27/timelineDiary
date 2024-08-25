import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { getPostsByBookmark } from '../api/sanity';

export default function Bookmark() {
    const { user } = useAuthContext();


    const { isLoading, error, data } = useQuery({
        queryKey: ['diaryListsBookmarks', user?.uid || ''],
        queryFn: async () => getPostsByBookmark(user?.uid),
        enabled: !!user,
        staleTime: 5000
    })

    if (!user) {
        return <div>기본 sample...</div>; // uid가 준비되지 않았을 때의 처리
    }
    return (
        <section>
            bookmark page
            {/* <Button text='login' onClick={() => login()} /> */}
            {
                data && <ul>
                    {
                        data.map((list, index) => (
                            <li key={index}>{list.contents}
                                <p>{list.bookmark ? 'bookmark' : ''}</p></li>
                        ))
                    }
                </ul>
            }
        </section>
    );
}



