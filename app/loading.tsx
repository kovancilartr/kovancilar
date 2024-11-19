const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-slate-400">
      <h1 className="text-4xl font-bold mb-6">Yükleniyor...</h1>
      <div className="w-16 h-16 border-4 border-slate-400 border-dashed rounded-full animate-spin mb-4"></div>
    </div>
  );
};

export default Loading;
