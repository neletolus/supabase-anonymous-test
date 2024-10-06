"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Database } from '@/utils/types/supabasetype';
import { log } from 'console';
// Supabaseクライアントの設定
const supabase = createClient();

const SampleTable: React.FC = () => {
  const [samples, setSamples] = useState<Database['public']['Tables']['sample-table']['Row'][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const { data, error } = await supabase
          .from('sample-table')
          .select('*');

        if (error) throw error;

        setSamples(data);
        setLoading(false);

        console.log(data)
      } catch (err) {
        setError('データの取得中にエラーが発生しました');
        setLoading(false);
      }
    };

    fetchSamples();
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>作成日</th>
          <th>テキスト</th>
        </tr>
      </thead>
      <tbody>
        {samples.map((sample) => (
          <tr key={sample.id}>
            <td>{sample.id}</td>
            <td>{sample.created_at}</td>
            <td>{sample.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SampleTable;