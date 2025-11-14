export function isOnMobile() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  return isMobile
}

export function openLinkInNewTab(url: string, after?: () => void) {
  // On mobile it makes more sense to just nav them to the link because things like Github/LinkedIn/etc have apps that may open
  if (isOnMobile()) {
    window.location.href = url
  } else {
    window.open(url, '_blank')
  }

  if (after) after()
}
