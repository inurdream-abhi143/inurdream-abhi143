#!/usr/bin/env bash
# scripts/create-gif.sh
# Usage: ./scripts/create-gif.sh input.mp4 output.gif
# Requires ffmpeg to be installed.

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 input.mp4 output.gif"
  exit 1
fi

INPUT="$1"
OUTPUT="$2"

# Recommended settings for a balance of quality and size
ffmpeg -y -i "$INPUT" -vf "fps=15,scale=800:-1:flags=lanczos" -loop 0 -preset slow -an -t 8 "$OUTPUT"

echo "Created GIF: $OUTPUT"
