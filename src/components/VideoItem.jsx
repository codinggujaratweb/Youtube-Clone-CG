const VideoItem = ({ video }) => {
  return (
    <a className="group" href="#">
      <div className="relative">
        <img className="rounded-lg aspect-video" src={video.thumbnailURL} alt={video.title} />
        <p className="absolute bottom-2 right-2 text-sm bg-black bg-opacity-50 text-white px-1.5 font-medium rounded-md">
          {video.duration}
        </p>
      </div>

      <div className="flex gap-3 py-3 px-2">
        <img className="h-9 w-9 rounded-full" src={video.channel.logo} alt={video.channel.name} />
        <div>
          <h2 className="group-hover:text-blue-500 font-semibold leading-snug line-clamp-2 dark:text-neutral-300" title={video.title}>
            {video.title}
          </h2>
          <p className="text-sm mt-1 text-neutral-700 hover:text-neutral-500 dark:text-neutral-300">
            {video.channel.name}
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {video.views} Views • {video.postedAt}
          </p>
        </div>
      </div>
    </a>
  )
}

export default VideoItem